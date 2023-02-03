import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { routes } from 'routes';
import { Layout } from './Layout/Layout';

const Home = lazy(() =>
  import('../pages/Home/Home').then(module => ({ default: module.Home }))
);
const Movies = lazy(() =>
  import('../pages/Movies/Movies').then(module => ({ default: module.Movies }))
);
const MovieDetails = lazy(() =>
  import('../pages/MovieDetails/MovieDetails').then(module => ({
    default: module.MovieDetails,
  }))
);
const Cast = lazy(() =>
  import('../pages/Cast/Cast').then(module => ({
    default: module.Cast,
  }))
);
const Reviews = lazy(() =>
  import('../pages/Reviews/Reviews').then(module => ({
    default: module.Reviews,
  }))
);

export const App = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={routes.MOVIES} element={<Movies />} />
        <Route path={routes.MOVIE_DETAILS} element={<MovieDetails />}>
          <Route path={routes.CAST} element={<Cast />} />
          <Route path={routes.REVIEWS} element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to={routes.HOME} />} />
      </Route>
    </Routes>
  );
};
