import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_CHILD = gql`
mutation Mutation($name: String!, $age: Int!, $mom: String!) {
  addChild(name: $name, age: $age, mom: $mom) {
    name
    age
    mom
    _id
  }
}
`;

export const ADD_COMMENT = gql`
  mutation addComment(
    $thoughtId: ID!
    $commentText: String!
    $commentAuthor: String!
  ) {
    addComment(
      thoughtId: $thoughtId
      commentText: $commentText
      commentAuthor: $commentAuthor
    ) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;


export const ADD_TASK = gql`
mutation AddTask($taskDesc: String!, $taskUser: String!, $taskEffort: Int!, $taskSubCategory: String!, $taskLabel: String) {
  addTask(taskDesc: $taskDesc, taskUser: $taskUser, taskEffort: $taskEffort, taskSubCategory: $taskSubCategory, taskLabel: $taskLabel) {
    _id
    taskDesc
    taskEffort
    taskUser
    createdAt
    taskLabel
    taskSubCategory
  }
}
`;

export const ADD_THOUGHT = gql`
  mutation addThought($thoughtText: String!, $thoughtAuthor: String!) {
    addThought(thoughtText: $thoughtText, thoughtAuthor: $thoughtAuthor) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;
