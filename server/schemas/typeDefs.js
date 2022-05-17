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
    category: String
  }

  type Frequency {
    _id: ID
    name: String
  }


  type Child {
    _id: ID
    name: String
    age: Int
    mom: String
  }

  type Task {
    _id: ID
    taskDesc: String
    taskEffort: Int
    taskUser: String
    createdAt: String
    taskLabel: String
    taskSubCategory: String
  }

  type Auth {
    token: ID!
    user: User
  } 


  type BalanceData {
    workTasks: Int
    lifeTasks: Int
    workEffort: Int
    lifeEffort: Int
  }

  type Query {

    user(username: String!): User

    users: [User]

    children(username: String!): [Child]

    tasks(username: String!): [Task]

    allTasks: [Task]

    allChildren: [Child]

    subcategories: [SubCategory]

    categories: [Category]

    subcategory(subCatName: String!): SubCategory

    balance(username: String!): BalanceData

  }

  type Mutation {

    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    
    addSubCategory(name: String!, category: ID!): SubCategory

    addChild(name: String!, age: Int!, mom:String!): Child


    addTask(taskDesc: String!, taskUser: String!, taskEffort: Int!, taskSubCategory: String!, taskLabel: String):Task

    removeTask(taskId: ID!): Task

    removeChild(childId: ID!): Child
    
  }
`;


//add query to calculate balance: return type??

module.exports = typeDefs;
