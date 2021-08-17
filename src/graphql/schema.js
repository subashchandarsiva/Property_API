const { GraphQLSchema } = require("graphql");

const { MainQueryType } = require("./query");
const { MainMutationType } = require("./mutations");

const schema = new GraphQLSchema({
  query: MainQueryType,
  mutation: MainMutationType,
});

module.exports = {
  schema,
};
