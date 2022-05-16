import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query Query($username: String!) {
  user(username: $username) {
    username
    email
    _id
  }
}
`;

export const QUERY_TASKS = gql`
query Query($username: String!) {
  tasks(username: $username) {
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


export const QUERY_CHILDREN = gql`
query Query($username: String!) {
  children(username: $username) {
    name
    age
  }
}
`;


export const QUERY_SUBCATEGORIES = gql`
query Query {
  subcategories {
    _id
    name
    category
  }
}
`;