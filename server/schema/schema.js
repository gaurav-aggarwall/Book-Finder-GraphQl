const graphql = require('graphql');
const { GraphQLSchema } = graphql;

const rootQuery = require('./rootQuery');
const mutation = require('./mutation');

module.exports = new GraphQLSchema({
    query: rootQuery,
    mutation
});