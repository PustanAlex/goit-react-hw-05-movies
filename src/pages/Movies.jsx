import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from 'components/MovieDetails';

const Movies = () => {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);

    const fetchMovieDetails = useCallback(() => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzFmMzJjMjM5MGY2ZmYxYWJmMzM0YmU0NWYzNWVjZCIsInN1YiI6IjY2NGExYjE1N2E0ZmJhOTBlZjc5NTVmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dtpOxBwnN5f27gwTDLB56UXtIA8G15JR9oOxEqob8wE'
            }
        };
          
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
            .then(response => response.json())
            .then(response => setMovieDetails(response))
            .catch(err => console.error(err));
    }, [movieId]); 

    useEffect(() => {
       fetchMovieDetails();
    }, [fetchMovieDetails]); 

    return (
        <MovieDetails movieDetails={movieDetails}/>
    )
}

export default Movies;
