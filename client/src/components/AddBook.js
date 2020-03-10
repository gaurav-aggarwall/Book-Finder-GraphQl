import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';

import { addBookQuery, getAuthorsQuery, getBooksQuery } from '../queries/queries';

export default function AddBook() {
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [authorId, setAuthorId] = useState('');

    let { loading, error, data } = useQuery(getAuthorsQuery);
    let [saveBook] = useMutation(addBookQuery);

    let authors = <option>Loading Authors...</option>;

	if (!loading && data) {
        authors = data.authors.map(author => <option key={author.id} value={author.id}>{author.name}</option>);
    }

    if (error) return <p>Error </p>;
    
    function submitForm(e) {
        e.preventDefault();
        
        // Run mutation that will save the book
        saveBook({
            variables: {
                name, 
                genre, 
                authorId 
            },
            refetchQueries: [{ query: getBooksQuery}]
        });
        
        // Resetting the form
        setName('');
        setGenre('');
        setAuthorId('');
        console.log('Saved');
    }

	return (
		<div>
			<form id='add-book' onSubmit={submitForm}>
                <div className='filed'>
                    <label>Book Name:</label>
                    <input type='text' value={name} onChange={e => setName(e.target.value)}/>
                </div>
                <div className='filed'>
                    <label>Genre:</label>
                    <input type='text' value={genre} onChange={e => setGenre(e.target.value)}/>
                </div>
                <div className='filed'>
                    <label>Author:</label>
                    <select value={authorId} onChange={e => setAuthorId(e.target.value)}>
                        <option>Select Author</option>
                        {authors}
                    </select>
                </div>
                <button>Add Book</button>
            </form>
		</div>
	);
}