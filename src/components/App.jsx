import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import MovieDetails from './MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import GoBackButton from './GoBackButton/GoBackButton';
import NotFound from './NotFound/NotFound';

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
      <div>
        <GoBackButton />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
