import React from 'react';
import ApolloCLient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import BookList from './components/BookList';
import AddBook from './components/AddBook';

const client = new ApolloCLient({
	uri: 'http://localhost:4000/graphql'
});

function App() {
	return (
		<ApolloProvider client={client}>
			<div id="main">
				<h1>Book Finder</h1>
				<BookList />
				<AddBook />
			</div>
		</ApolloProvider>
	);
}

export default App;
