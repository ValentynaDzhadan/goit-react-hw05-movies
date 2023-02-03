import { MoviesItem } from 'components/MoviesItem/MoviesItem';

export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(el => (
        <MoviesItem key={el.id} {...el} />
      ))}
    </ul>
  );
};
