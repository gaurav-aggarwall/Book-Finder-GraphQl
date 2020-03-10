import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';

import { addBookQuery, getAuthorsQuery } from '../queries/queries';

export default function AddBook() {
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [author, setAuthor] = useState('');

    let { loading, error, data } = useQuery(getAuthorsQuery);
    let [saveBook, { loading1 }] = useMutation(addBookQuery);

    let authors;

	if (loading) authors = <option>Loading Authors...</option>;
    else authors = data.authors.map(author => <option key={author.id} value={author.id}>{author.name}</option>)

    if (error) return <p>Error </p>;
    
    function submitForm(e, state) {
        e.preventDefault();
        // saveBook();
    }

	return (
		<div>
			<form id='add-book' onSubmit={submitForm}>
                <div className='filed'>
                    <label>Book Name:</label>
                    <input type='text' onChange={e => setName(e.target.value)}/>
                </div>
                <div className='filed'>
                    <label>Genre:</label>
                    <input type='text' onChange={e => setGenre(e.target.value)}/>
                </div>
                <div className='filed'>
                    <label>Author:</label>
                    <select onChange={e => setAuthor(e.target.value)}>
                        <option>Select Author</option>
                        {authors}
                    </select>
                </div>
                <button>Add Book</button>
            </form>
		</div>
	);
}