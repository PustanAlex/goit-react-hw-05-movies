import React, { useCallback, useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  const fetchMovieDetails = useCallback(() => {
    const apiKey = 'a31f32c2390f6ff1abf334be45f35ecd';


    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=${apiKey}`
    )
      .then(response => response.json())
      .then(response => setMovieDetails(response))
      .catch(err => console.error(err))
  }, [movieId]);

  useEffect(() => {
    fetchMovieDetails();
  }, [fetchMovieDetails]);

  if (!movieDetails) {
    return <div>Loading...</div>; 
  }

  const { title, overview, release_date, vote_average, poster_path, genres } =
    movieDetails;

  return (
    <div className='allInfoAboutFilm'>
      <div className='movieDetails'>
        <div>
          <h1>{title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w342${poster_path}`}
            alt={title}
          />
        </div>
        <div> 
          <p className='overview'>{overview}</p>
          <p>Release Date: {release_date}</p>
          <p>Rating: {vote_average}</p>
          <p>
            Genres:
            {genres.map(genre => (
              <span key={genre.id}> | {genre.name}</span>
            ))}
          </p>
        </div>
      </div>

      <p>Additional information</p>
      <div>
        <div >
          <div className="aditionalInformation">
            <Link to={`/movies/${movieId}/cast`}>
              <h2>Cast</h2>
            </Link>
            <Link to={`/movies/${movieId}/reviews`}>
              <h2>Reviews</h2>
            </Link>
          </div>
        
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
