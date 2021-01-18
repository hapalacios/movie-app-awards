import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MoviesList from '../Components/MoviesList/MoviesList.jsx';
import SearchBox from '../Components/SearchBox/SearchBox.jsx';
import AddNominations from '../Components/AddNominations/AddNominations.jsx';
import RemoveNominations from '../Components/RemoveNominations/RemoveNominations.jsx';
import './App.scss';  

const App = () => {
	const [movies, setMovies] = useState([]);
	const [nominations, setNominations] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	let valInit = true;

   //APIC URL code http://www.omdbapi.com/?s=spiderman&apikey=fd74329c

	// Here we search all the movies for the first render
   const getAllMovies = async () => {
		const url = `http://www.omdbapi.com/?s=Avengers&apikey=fd74329c`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
			valInit = false;
		}
	};
	
	// Here we search the movie requested
   const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=fd74329c`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		} else {
			valInit = true;
		}
	};

	useEffect(() => {
		if (valInit === true) {
			getAllMovies();
			valInit = false;
		}
	}, valInit);

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	useEffect(() => {
		const movieNominations = JSON.parse(
			localStorage.getItem('react-movie-app-nominations')
		);

		if (movieNominations) {
			setNominations(movieNominations);
		}
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-nominations', JSON.stringify(items));
	};

	const addNominatedMovie = (movie) => {
		const newNominatedList = [...nominations, movie];
		setNominations(newNominatedList);
		saveToLocalStorage(newNominatedList);
	};

	const removeNominatedMovie = (movie) => {
		const newNominatedList = nominations.filter(
			(nominated) => nominated.imdbID !== movie.imdbID
		);

		setNominations(newNominatedList);
		saveToLocalStorage(newNominatedList);
	};

	return (
		<div className='app-container'>
			
		   <h1 className='app-container__title'>
				 The Shoppies: Movie awards for entrepreneurs
			</h1>

			<div className='app-container__movies-search-nav'>
				<h2 className='app-container__movies-list-title'>
					Movies
				</h2>
				<SearchBox 
					className="app-container__search-box"
					searchValue={searchValue} 
					setSearchValue={setSearchValue} />
			</div>

			{/* This is the list of searched movies */}
			<div className='app-container__movies-list'>
				<MoviesList
					movies={movies}
					handleNominationsClick={addNominatedMovie}
					nominatedComponent={AddNominations}
				/>
			</div>

			{/* This is the list of nomitaded movies */}
			<div className='app-container__movies-nominations'>
				<h2 className='app-container__movies-nominations-title'>
					 Nominations
				</h2>

				<MoviesList
					movies={nominations}
					handleNominationsClick={removeNominatedMovie}
					nominatedComponent={RemoveNominations}
				/>
			</div>
		</div>
	);
};

export default App;