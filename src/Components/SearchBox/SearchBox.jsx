import React from 'react';
import './SearchBox.scss';  

const SearchBox = (props) => {
	return (
		<div className='search-box'>
			<input
				className='form-control'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Introduce the name of the movie...'
			></input>
		</div>
	);
};

export default SearchBox;
