import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);


const startServer = async () => {
  
  const server = new ApolloServer ({
    typeDefs,
    resolvers,
  });
  
  server.applyMiddleware({ app }); // app is from an existing express app
  
  await mongoose.connect('mongodb://localhost:27017/gqltest', 
    { useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,

    }
  );

  app.listen({ port: 4000 }, () => 
    console.log(`server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();