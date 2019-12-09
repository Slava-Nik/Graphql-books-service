import { gql } from "apollo-boost";



const getBookQuery = gql`
  query($id: ID!){
    book(id: $id) {
      name
      genre
      author{
        name
        age
        books{
          id
          name
        }
      }
    }
  }
`;

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const getAuthorsQuery = gql`
  {
    authors {
      name
      age
      id
    }
  }
`;

export {
 getBookQuery,
  getBooksQuery,
  getAuthorsQuery
};