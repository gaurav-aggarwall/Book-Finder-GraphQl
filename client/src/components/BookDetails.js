import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { getBookQuery } from '../queries/queries';

function BookList({id}) {
    let { loading, error, data } = useQuery(getBookQuery, {
        variables: {
            id
        }
    });

    if (loading) return <p>Loading Book...</p>;
	if (error) return <p>Error </p>;
    
    return (
		<div id='book-details'>
			<h2>{data.book.name}</h2>
			<p>{data.book.genre}</p>
			<p>{data.book.author.name}</p>
			<p>All books by this author: </p>
            <ul className="other-books">
                {data.book.author.books.map(book => {
                    return <li key={book.id}>{book.name}</li>
                })}
            </ul>
		</div>
	);
}

export default BookList;