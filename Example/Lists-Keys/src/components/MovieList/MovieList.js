// Component : MovieList.js
import React from "react";
import "./MovieList.css";

const MovieList = () => {
	const movies = [
		{
			id: 1,
			title: "The Shawshark Redemption",
			director: "Frank Darabont",
			year: 1994,
		},
		{
			id: 2,
			title: "The Godfather",
			director: "Francis Ford Coppola",
			year: 1972,
		},
		{
			id: 3,
			title: "The Dark Knight",
			director: "Christopher Nolan",
			year: 2008,
		},
		{
			id: 4,
			title: "Pulp Fiction",
			director: "Quentin Tarantino",
			year: 1994,
		},
	];
	return (
		<div>
			<h2>Movie List with Keys</h2>
			<ul className="movie-list">
				{movies.map((movie) => (
					<li key={movie.id}>
						<h3>{movie.title}</h3>
						<p>Director: {movie.director}</p>
						<p>Year: {movie.year}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default MovieList;
