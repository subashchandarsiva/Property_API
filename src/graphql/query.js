const { GraphQLObjectType, GraphQLList } = require("graphql");

const { HomeType } = require("./type");
// const { Property } = require("../model/property.schema");
const { getHomesList } = require("../services");

const MainQueryType = new GraphQLObjectType({
  name: "Query",
  description: "It is the top level query used for getting a list homes",
  fields: () => ({
    homes: {
      type: GraphQLList(HomeType),
      description: "List of Homes available or registered in the organization",
      resolve: getHomesList,
    },
  }),
});

module.exports = {
  MainQueryType,
};
