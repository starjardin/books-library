import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Book = {
  __typename?: 'Book';
  author: Scalars['String']['output'];
  availableCopies: Scalars['Int']['output'];
  borrowedAt?: Maybe<Scalars['String']['output']>;
  borrowedBy?: Maybe<User>;
  createdA: Scalars['String']['output'];
  dueDate?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isBorrowed: Scalars['Boolean']['output'];
  isbn: Scalars['Int']['output'];
  returnedAt?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addBook: Book;
  borrowBook: Book;
  createTodo: Todo;
  returnBook: Book;
  updateTodo: Todo;
};


export type MutationAddBookArgs = {
  input: NewBook;
};


export type MutationBorrowBookArgs = {
  isbn: Scalars['Int']['input'];
  userID: Scalars['ID']['input'];
};


export type MutationCreateTodoArgs = {
  input: NewTodo;
};


export type MutationReturnBookArgs = {
  isbn: Scalars['Int']['input'];
};


export type MutationUpdateTodoArgs = {
  id: Scalars['String']['input'];
  input: NewTodo;
};

export type NewBook = {
  author: Scalars['String']['input'];
  availableCopies: Scalars['Int']['input'];
  isbn: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type NewTodo = {
  text: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  books: Array<Book>;
  todos: Array<Todo>;
  users: Array<User>;
};

export type Todo = {
  __typename?: 'Todo';
  done: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
  user: User;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
};

export type GetAllBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllBooksQuery = { __typename?: 'Query', books: Array<{ __typename?: 'Book', id: string, isbn: number, isBorrowed: boolean, availableCopies: number, author: string, title: string, borrowedAt?: string | null, borrowedBy?: { __typename?: 'User', id: string } | null }> };


export const GetAllBooksDocument = gql`
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

/**
 * __useGetAllBooksQuery__
 *
 * To run a query within a React component, call `useGetAllBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllBooksQuery(baseOptions?: Apollo.QueryHookOptions<GetAllBooksQuery, GetAllBooksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllBooksQuery, GetAllBooksQueryVariables>(GetAllBooksDocument, options);
      }
export function useGetAllBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllBooksQuery, GetAllBooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllBooksQuery, GetAllBooksQueryVariables>(GetAllBooksDocument, options);
        }
export function useGetAllBooksSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllBooksQuery, GetAllBooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllBooksQuery, GetAllBooksQueryVariables>(GetAllBooksDocument, options);
        }
export type GetAllBooksQueryHookResult = ReturnType<typeof useGetAllBooksQuery>;
export type GetAllBooksLazyQueryHookResult = ReturnType<typeof useGetAllBooksLazyQuery>;
export type GetAllBooksSuspenseQueryHookResult = ReturnType<typeof useGetAllBooksSuspenseQuery>;
export type GetAllBooksQueryResult = Apollo.QueryResult<GetAllBooksQuery, GetAllBooksQueryVariables>;