import { gql } from "@apollo/client";

export const GET_ALL_BOOKS = gql`
  query getAllBooks {
    books {
      id
      isbn
      isBorrowed
      availableCopies
      author
      title
      borrowedBy {
        id
      }
      borrowedAt
    }
  }
`;

export const LOGIN = gql`
  mutation login($input: LoginInput!) {
    login(input: $input) {
      id
      email
      username
      token
    }
  }
`;

export const SIGNUP = gql`
  mutation signup($input: SignupInput!) {
    signup(input: $input) {
      id
      email
      username
      token
    }
  }
`;
