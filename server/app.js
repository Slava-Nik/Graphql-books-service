const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());

const connString = `mongodb://localhost:27017/sandboxgraphql`;
mongoose
  .connect(connString)
  .then(() => console.log("db connection established"))
  .catch(err => {
    throw Error(`no database connection at "${connString}"`);
    console.log(err);
  });

// bind express with graphql
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});
