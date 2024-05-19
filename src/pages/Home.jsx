import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const fetchTrending = () => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzFmMzJjMjM5MGY2ZmYxYWJmMzM0YmU0NWYzNWVjZCIsInN1YiI6IjY2NGExYjE1N2E0ZmJhOTBlZjc5NTVmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dtpOxBwnN5f27gwTDLB56UXtIA8G15JR9oOxEqob8wE'
        }
      };
      
      fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
        .then(response => response.json())
        .then(data => setTrendingMovies(data.results))
        .catch(err => console.error(err));
}

  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <ul>
      {trendingMovies.map(movie => (
        <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title || movie.name}</Link>
         </li>
      ))}
    </ul>
  );
};

export default Home;
