import React, { Component } from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import "./index.css";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class app extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
        <h1>Graphql books app</h1>
        <BookList></BookList>
        <AddBook></AddBook>
        </div>
      </ApolloProvider>
    );
  }
}

export default app;
