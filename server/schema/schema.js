const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const BookType = require('./BookSchema');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {id: {type: GraphQLString}},
            resolve(parent, args) {
                // get book using id (args.id) from the db
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});