import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import { typeDefs, resolvers } from './schema';

const app = express();

const server = new ApolloServer ({
  typeDefs,
  resolvers
});

server.applyMiddleware({ app }); // app is from an existing express app

app.listen({ port: 4000 }, () => 
  console.log(`server ready at http://localhost:4000${server.graphqlPath}`)
)