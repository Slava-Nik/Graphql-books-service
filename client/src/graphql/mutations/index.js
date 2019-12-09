import { gql } from "apollo-boost";

const addBookQuery = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      genre
      author{
        name
      }
    }
  }
`;

export {
  addBookQuery
};