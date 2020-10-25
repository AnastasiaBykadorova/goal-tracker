import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

console.log('Starting functions...');

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

console.log('Initializing functions...');

export const api = functions.https.onRequest(app);
