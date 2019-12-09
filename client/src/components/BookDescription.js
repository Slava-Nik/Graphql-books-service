import React, { useState } from "react";
import {getBookQuery} from "../graphql/queries";
import { useQuery} from "@apollo/react-hooks";


function BookDescription(props) {
    const book = useQuery(getBookQuery, {skip: !props.selectedId, variables: {id: props.selectedId}});
    const bookData = book.data && book.data.book;
     if (book.loading) return <div>Loading book description...</div>;
     if (book.error) return null;
    if(!bookData) return null;
  return (
    <div id="book-details">
      <h2>Name: {bookData.name}</h2>
      <p>Genre: {bookData.genre}</p>
      <p>Author: {bookData.author.name} | Age: {bookData.author.age}</p>
      <ul>
        {bookData.author.books.map(book=><li key={book.id}>{book.name}</li>)}
      </ul>
    </div>
  );
}

export default BookDescription;
