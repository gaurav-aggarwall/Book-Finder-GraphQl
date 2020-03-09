const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const AuthorType = require('./AuthorSchema');

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
        authorId: {type: GraphQLID},
        author: {
            type: AuthorType,
            resolve(parent, args) {
                return {name:"Inside", id:parent.authorId}
            }
        }
    })
});

module.exports = BookType;