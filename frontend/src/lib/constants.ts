import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { Book } from './types';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

const GET_BOOKS = gql`
  query GetBooks {
    books {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`;

export const fetchAllBooks = async (): Promise<Book[]> => {
  const { data } = await client.query({ query: GET_BOOKS });
  return data.books as Book[];
};

export default client;

