import { Suspense } from 'react';
import { useLocation, Link, Outlet } from 'react-router-dom';
import { routes } from 'routes';

export const MovieCard = ({ movie }) => {
  console.log(movie);

  const getUserScore = () => {
    return Math.round(movie.vote_average * 10);
  };
  const location = useLocation();
  return (
    <>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title || movie.name}
        />
        <h2>{movie.title || movie.name}</h2>

        <span>User score: {getUserScore()}%</span>
        <h3>Overview</h3>
        <span>{movie.overview}</span>
        <h3>Genres</h3>
        <span>{movie.genres.map(el => el.name).join(' ')}</span>
      </div>
      <div>
        <h3>Additional Information</h3>
        <Link state={location.state} to={routes.CAST}>
          Cast
        </Link>
        <Link state={location.state} to={routes.REVIEWS}>
          Reviews
        </Link>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
