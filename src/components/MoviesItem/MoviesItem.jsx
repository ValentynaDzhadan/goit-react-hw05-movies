import { useLocation, Link } from 'react-router-dom';

export const MoviesItem = ({ id, title }) => {
  const location = useLocation();

  return (
    <li>
      <Link state={{ from: location }} to={`/movies/${id}`}>
        <h3>{title}</h3>
      </Link>
    </li>
  );
};
