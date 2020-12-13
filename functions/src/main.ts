// eslint-disable-next-line import/no-unassigned-import
import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import { buildSchema } from 'type-graphql';
import { GoalsResolver } from './resolvers/goals.resolver';
import { UserGoalsResolver } from './resolvers/user-goals.resolver';

console.log('Starting functions...');

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

const app = express();

const initializeGraphqlServer = async (expressApp: express.Express): Promise<void> => {
  console.log('Initializing GQL server...');

  const schema = await buildSchema({ resolvers: [GoalsResolver, UserGoalsResolver] });
  const server = new ApolloServer({
    schema,
    context: ({ req }) => ({ headers: req.headers }),
  });

  server.applyMiddleware({
    app: expressApp,
    path: '/',
    cors: true,
  });
};

// eslint-disable-next-line @typescript-eslint/no-floating-promises
initializeGraphqlServer(app);

console.log('Initializing functions...');

export const api = functions.https.onRequest(app);
