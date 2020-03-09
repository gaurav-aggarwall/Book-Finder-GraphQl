const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLList } = graphql;

const BookType = require('./BookSchema');
const AuthorType = require('./AuthorSchema');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                // Temporary data
                return {name: "Book", id:args.id }
            }
        },
        author: {
            type: AuthorType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                // Temporary data
                return {name: "Author", id:args.id }
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                return [
                    {id:1, name: "1", age: 1},
                    {id:2, name: "2", age: 2},
                    {id:3, name: "3", age: 3},
                ]
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args) {
                return [
                    {id:1, name: "1", genre: "1", authorId: 1},
                    {id:2, name: "2", genre: "2", authorId: 2},
                    {id:3, name: "3", genre: "3", authorId: 3},
                ]
            }
        }
    }
});

module.exports = RootQuery;