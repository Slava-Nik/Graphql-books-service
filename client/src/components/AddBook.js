import React, { useState } from "react";
import {getBooksQuery, getAuthorsQuery} from "../graphql/queries";
import {addBookQuery} from "../graphql/mutations";
import { useQuery, useMutation } from "@apollo/react-hooks";



function AddBook() {
    const authors = useQuery(getAuthorsQuery);
    const [bookName, setBookName] = useState("");
    const [bookGenre, setBookGenre] = useState("");
    const [bookAuthor, setBookAuthor] = useState("");
    const [addBook] = useMutation(addBookQuery);
    const loadAuthors = () => {
      if (authors.loading || authors.error) return <option value="loading">Loading authors...</option>;
      return authors.data.authors.map((author, i) => {
        return  <option key={author.id} value={author.id}>{author.name}</option>;
      }
      );
    }

  return (
    <form id="add-book" onSubmit={(e)=>{
      e.preventDefault();
      if(!bookName.length || !bookGenre.length) return;
      addBook({variables: {name: bookName, genre: bookGenre, authorId: bookAuthor}, 
      refetchQueries: [{query: getBooksQuery }]}).then(null,
      err => {
      console.log(err)
   }
  );
      }}>
      <div className="field">
      <label htmlFor="book-name"> Book's name: </label>
      <input name="book-name" type="text" onChange={(e)=>setBookName(e.target.value)}/>
      </div>
        <div className="field">
      <label htmlFor="book-genre"> Book's genre: </label>
      <input name="book-genre" type="text" onChange={(e)=>setBookGenre(e.target.value)}/>
      
      </div>
      <div className="field">
      <label htmlFor="book-genre"> Book's author: </label>
      <select name="book-author" onChange={(e)=>setBookAuthor(e.target.value)}>
        <option value=''>Select author</option>
        {loadAuthors()}
      </select>
      
      </div>
      <br/><br/>
      <button>+</button>
    </form>
  );
}

export default AddBook;
