const { GraphQLNonNull, GraphQLObjectType, GraphQLString } = require("graphql");

const { HomeType } = require("./type");
const { Property } = require("../model/property.schema");

const { addHome, updateHome, deleteHome } = require("../services");

const MainMutationType = new GraphQLObjectType({
  name: "Mutation",
  description: "It is the top Level for Mutation",
  fields: () => ({
    UpdateHome: {
      type: HomeType,
      description: "Updating the existing Home details",
      args: {
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
      },
      resolve: async (parent, args) => updateHome(args),
    },
    AddHome: {
      type: HomeType,
      description: "Adding a new Home in the organization",
      args: {
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
      },
      resolve: (parent, args) => addHome(args),
    },
    DeleteHome: {
      type: GraphQLString,
      description: "Deleting a new Home in the organization",
      args: {
        id: {
          type: GraphQLNonNull(GraphQLString),
          description: "This is the Home ID",
        },
      },
      resolve: async (parent, args) => deleteHome(args.id),
    },
  }),
});

module.exports = {
  MainMutationType,
};
