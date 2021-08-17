const { GraphQLNonNull, GraphQLObjectType, GraphQLString } = require("graphql");

const HomeType = new GraphQLObjectType({
  name: "home",
  description:
    "This is a individual home owned by owners and registered in organization",
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLString),
      description: "This is the Home ID",
    },
    name: {
      type: GraphQLNonNull(GraphQLString),
      description: "This is the Home Name",
    },
    contact: {
      type: GraphQLNonNull(GraphQLString),
      description: "Email ID contact of the owner",
    },
    location: {
      type: GraphQLNonNull(GraphQLString),
      description: "Home location details and address",
    },
  }),
});
const DeleteHomeType = new GraphQLObjectType({
  name: "deletehome",
  description: "To Delete Home",
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLString),
      description: "This is the Home ID",
    },
  }),
});

module.exports = {
  HomeType,
  DeleteHomeType,
};
