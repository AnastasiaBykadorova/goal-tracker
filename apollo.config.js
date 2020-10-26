module.exports = {
  client: {
    service: {
      name: 'goal-tracker',
      // URL to the GraphQL API
      url: 'http://localhost:5001/bulka-goal-tracker/us-central1/api',
    },
    // Files processed by the extension
    includes: [
      'src/**/*.vue',
      'src/**/*.ts',
    ],
  },
};
