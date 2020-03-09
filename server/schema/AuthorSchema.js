const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt, GraphQLList } = graphql;

const BookType = require('./BookSchema');

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},
        // books: {
        //     // type: new GraphQLList(BookType),
        //     type: BookType,
        //     resolve(parent, args) {
        //         return {
        //             id: parent.id,
        //             name: "Why",
        //             genre: "1",
        //             authorId: parent.id,
        //         }
        //     }
        // }
    })
});

module.exports = AuthorType;