const { AuthenticationError } = require('apollo-server-express');
const { User, Task, Category, SubCategory, Frequency, Child } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // users: async () => {
    //   return User.find();
    // },
    users: async () => {
      return User.find().populate('tasks').populate('children');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },

    allTasks: async () => {
      return Task.find();
    },

    allChildren: async () => {
      return Child.find();
    },

    tasks: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Task.find(params).sort({ createdAt: -1 });
    },
    children: async (parent, { username }) => {
      return Child.find({ mom: username });
    },

    subcategories: async () => {
      return SubCategory.find();
    },

    categories: async () => {
      return Category.find();
    }
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    addSubCategory: async (parent, { name, category }) => {
      return await SubCategory.create({ name, category });
    },

    addChild: async (parent, { name, age, mom }) => {
      //return await Child.create({ name, age, mom });
      const child = await Child.create({  name, age, mom });

      await User.findOneAndUpdate(
        { username: mom },
        { $addToSet: { children: child._id } }
      );

      return child;
    },

    addTask: async (parent, { taskDesc, taskUser, taskEffort, taskSubCategory, taskLabel } ) => {
      //return await Child.create({ name, age, mom });
      //      return await SubCategory.create({taskDesc: desc, taskUser: user, taskEffort: effort, taskLabel: label, taskSubCategory:subCat});

      const task = await Task.create(

        {taskDesc, taskUser, taskEffort, taskLabel, taskSubCategory}
        
        );

      await User.findOneAndUpdate(
        { username: taskUser },
        { $addToSet: { tasks: task._id } }
      );

      return task;
    },

    //    addChild(name: String!, age: Int!, mom:ID!): Child

    // addThought: async (parent, { thoughtText, thoughtAuthor }) => {
    //   const thought = await Thought.create({ thoughtText, thoughtAuthor });

    //   await User.findOneAndUpdate(
    //     { username: thoughtAuthor },
    //     { $addToSet: { thoughts: thought._id } }
    //   );

    //   return thought;
    // },
    // addComment: async (parent, { thoughtId, commentText, commentAuthor }) => {
    //   return Thought.findOneAndUpdate(
    //     { _id: thoughtId },
    //     {
    //       $addToSet: { comments: { commentText, commentAuthor } },
    //     },
    //     {
    //       new: true,
    //       runValidators: true,
    //     }
    //   );
    // },
    // removeThought: async (parent, { thoughtId }) => {
    //   return Thought.findOneAndDelete({ _id: thoughtId });
    // },
    // removeComment: async (parent, { thoughtId, commentId }) => {
    //   return Thought.findOneAndUpdate(
    //     { _id: thoughtId },
    //     { $pull: { comments: { _id: commentId } } },
    //     { new: true }
    //   );
    // },
  },
};

module.exports = resolvers;
