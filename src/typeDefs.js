import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    hello: String!
    cats: [Cat!]!
    cat (id: ID!): Cat!

    items: [Item!]!
  }

  type Cat {
    id: ID!
    name: String!
    age: Int!
  }

  type Item {
    id: ID!
    name: String!
  }

  input updateCatInput {
    name: String
    age: Int
  }

  type Mutation {
    createCat (name: String!, age: Int!): Cat!
    deleteCat (id: ID): Boolean
    updateCat (id: ID!, input: updateCatInput!): Cat!

    createItem (name: String): Item!
  }
`;