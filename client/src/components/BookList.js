import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';

import BookDetails from './BookDetails';

import { getBooksQuery } from '../queries/queries';

function BookList() {
	const [selected, setSelected] = useState(null);

	let { loading, error, data } = useQuery(getBooksQuery);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error </p>;

	return (
		<div>
			<ul id='book-list'>
				{data.books.map(book => <li key={book.id} onClick={e => setSelected(book.id)}>{book.name}</li>)}
			</ul>
			{selected ? <BookDetails id={selected}/> : <h3>No Book Selected...</h3>}
		</div>
	);
}

export default BookList;