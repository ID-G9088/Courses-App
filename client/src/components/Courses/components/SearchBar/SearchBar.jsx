import { useState } from 'react';

import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';

import './searchBar.scss';

const SearchBar = ({ handleSearchSubmit }) => {
	const [searchValue, setSearchValue] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();
		handleSearchSubmit(searchValue);
	};

	const onSearchInputChange = (e) => {
		setSearchValue(e.target.value);
	};

	return (
		<form onSubmit={onSubmit} className='search-form'>
			<Input
				type='text'
				className='input'
				name='searchInput'
				placeholderText='Enter course name or id...'
				onChange={onSearchInputChange}
				value={searchValue}
			/>

			<Button className='btn' buttonText='Search' />
		</form>
	);
};

export default SearchBar;
