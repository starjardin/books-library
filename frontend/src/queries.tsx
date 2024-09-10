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
