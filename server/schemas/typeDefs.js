const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    children: [Child]
    tasks: [Task]
  }

  type Category {
    _id: ID
    name: String
  }

  type SubCategory {
    _id: ID
    name: String
  }

  type Frequency {
    _id: ID
    name: String
  }


  type Child {
    _id: ID
    name: String
    age: Int
    mom: User
  }

  type Task {
    _id: ID
    taskDesc: String
    taskEffort: Int
    taskUser: String
    createdAt: String
    taskLabel: Child
    taskSubCategory: SubCategory
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {

    user(username: String!): User

    children(username: String!): [Child]

    tasks(username: String!): [Task]

    allTasks: [Task]

  }

  type Mutation {

    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    
    addSubCategory(name: String!, category: ID!): SubCategory

    addChild(name: String!, age: Int!, mom:ID!): Child


    addTask(taskDesc: String!, taskUser: ID!, taskEffort: Int!, taskSubCategory: ID!, taskLabel: String):Task

    removeTask(taskId: ID!): Task

    removeChild(childId: ID!): Child
    
  }
`;


//add query to calculate balance: return type??

module.exports = typeDefs;
