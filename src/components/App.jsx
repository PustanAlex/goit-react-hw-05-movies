import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import GoBackButton from './GoBackButton/GoBackButton';
import NotFound from './NotFound/NotFound';

const HomeLazy = React.lazy(() => import('pages/Home/Home'));
const MoviesLazy = React.lazy(() => import('pages/Movies/Movies'));
const MovieDetailsLazy = React.lazy(() => import('./MovieDetails/MovieDetails'));
const CastLazy = React.lazy(() => import('./Cast/Cast'));
const ReviewsLazy = React.lazy(() => import('./Reviews/Reviews'));

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
        <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><HomeLazy /></Suspense>} />
        <Route path="/movies" element={<Suspense fallback={<div>Loading...</div>}><MoviesLazy /></Suspense>} />
        <Route path="/movies/:movieId" element={<Suspense fallback={<div>Loading...</div>}><MovieDetailsLazy /></Suspense>}>
          <Route path="cast" element={<Suspense fallback={<div>Loading...</div>}><CastLazy /></Suspense>} />
          <Route path="reviews" element={<Suspense fallback={<div>Loading...</div>}><ReviewsLazy /></Suspense>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

