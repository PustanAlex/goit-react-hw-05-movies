import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from './MovieDetails';
import Cast from './Cast'; // Importă componenta Cast
import Reviews from './Reviews';

export const App = () => {
  return (
    <Router basename="/goit-react-hw-05-movies">
      <nav>
        <h2>
          <Link to="/">Home</Link>
        </h2>

        <h2>
          <Link to="/movies">Movies</Link>
        </h2>
      </nav>
      <button type='button'>Go back</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path='reviews' element={<Reviews />}/>
        </Route>
      </Routes>
    </Router>
  );
};

// TODO: Go back button, add lazy and suspense, make search bar
