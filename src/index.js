const express = require("express");
const app = express();

require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

const db = require("./connections");

const { graphqlHTTP } = require("express-graphql");

const { schema } = require("./graphql/schema");

const cors = require("cors");

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function () {
  // we're connected!
  console.log("Connected");
  app.listen(5000, () => {
    console.log("Running");
  });
});

module.exports = {
  app,
};
