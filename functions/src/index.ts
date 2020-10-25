import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

const typeDefs = gql`
  type Goal {
    title: String,
    countPerWeek: Int,
  }

  type Query {
    goals: [Goal]
  }
`;

const resolvers = {
  Query: {
    goals: () => 'Success!',
  },
};

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app, path: '/', cors: true });

export const graphql = functions.https.onRequest(app);
