const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    children: [Child]
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
    taskUser: User
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
    children(username: String!): [Children]
    tasks(username: String!): [Tasks]

  }

  type Mutation {

    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    
    addSubCategory(name: String!, category: ID!): SubCategory

    addChild(name: String!, age: Int!, mom:ID!): Child


    addTask(
      taskDesc: String!, taskUser: ID!, taskEffort: Int!, taskSubCategory: ID!, taskLabel
      ):Task

    removeTask(taskId: ID!): Task
    
  }
`;


//add query to calculate balance: return type??

module.exports = typeDefs;
