import React from 'react';
import './MoviesList.scss';  

const MoviesList = (props) => {
	const NominatedComponent = props.nominatedComponent;

	return (
		// Here we display movies using the map function from the Array of movies from the API
		<div className="movies-list">
			{props.movies.map((movie, index) => (
				movie.Poster === 'N/A' ? null :

				<div className='movies-list__all-container'>
					<div className='movies-list__container'>
						<img className="movies-list__poster" 
							src={movie.Poster} 
							alt='movie'>
						</img>
						<div className='movies-list__nominations-click'
							onClick={() => props.handleNominationsClick(movie)} >
							<NominatedComponent 
							  className='movies-list__nominated-component' />
						</div>
					</div> 	
					<div  className='movies-list__bottom'>
						<p className='movies-list__bottom-title'>{movie.Title}</p>
						<p className='movies-list__bottom-year'>{movie.Year}</p>
					</div>
				</div>

			))}
		</div>
	);
};

export default MoviesList;
