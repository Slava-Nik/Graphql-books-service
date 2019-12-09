import React, { useState } from "react";
import {getBooksQuery} from "../graphql/queries";
import { useQuery } from "@apollo/react-hooks";
import BookDescription from "../components/BookDescription";



function BookList() {
  let [selectedBookId, setSelectedBookId] = useState(null);
  let books = useQuery(getBooksQuery);
  if (books.loading) return <div>Loading books...</div>;
  if (books.error) return <React.Fragment>Error :(</React.Fragment>;
  books = books.data && books.data.books;

  return (
    <div>
      <ul id="book-list">
        {books && books.map(book => (
          <li style={{cursor: 'pointer'}}key={book.id} onClick={(e)=>{setSelectedBookId(book.id)}}>{book.name}</li>
        ))}
      </ul>
      <br/>
      <BookDescription selectedId={selectedBookId}/>
      <br/>
    </div>
  );
}

export default BookList;
