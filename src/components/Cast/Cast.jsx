import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  const movieCasting = useCallback(() => {
    const apiKey = 'a31f32c2390f6ff1abf334be45f35ecd';

    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US&api_key=${apiKey}`
    )
      .then(response => response.json())
      .then(castingData => setCast(castingData.cast))
      .catch(err => console.error(err));
  }, [movieId]);

  useEffect(() => {
    movieCasting();
  }, [movieCasting]);

  return (
    <div className='casting'>
      {cast.map(cast => (
        <ul key={cast.id}>
          <li>
            <img className='profilePath' src={`https://image.tmdb.org/t/p/w342${cast.profile_path}`} alt={cast.name}/>
            <p>Name: {cast.name}</p>
            <p>Character: {cast.character} </p>
          </li>
        </ul>
      ))}
    </div>
  );
  
};

export default Cast;
