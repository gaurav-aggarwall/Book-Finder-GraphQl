import { gql } from 'apollo-boost';

const getBooksQuery = gql`
	{
		books {
			id
			name
		}
	}
`;

const getAuthorsQuery = gql`
	{
		authors {
			id
			name
		}
	}
`;

const addBookQuery = gql`
	mutation {
		addBook(name: "", genre: "", authorId: "") {
			id
			name
		}
	}
`;

export { 
    getBooksQuery,
    getAuthorsQuery,
    addBookQuery
};