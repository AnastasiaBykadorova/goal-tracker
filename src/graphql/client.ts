import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core';

const GQL_API_URL = 'http://localhost:5001/bulka-goal-tracker/us-central1/api';
// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: GQL_API_URL,
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
export const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

// TODO: Add authorization header
