const { gql } = require("apollo-server");

const typeDefs = gql`
  type Slug {
    id: Int!
    name: String!
    baseUrl: String!
  }

  type Query {
    getSlug(id: Int!): Slug!
    getSlugs: [Slug!]!
  }

  type Mutation {
    createSlug(name: String!, baseUrl: String!): Slug!
  }
`;

module.exports = typeDefs;
