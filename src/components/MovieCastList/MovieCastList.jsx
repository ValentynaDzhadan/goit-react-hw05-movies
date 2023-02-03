import { MovieCastItem } from 'components/MovieCastItem/MovieCastItem';

export const MovieCastList = ({ cast }) => {
  return (
    <ul>
      {cast.map(el => (
        <MovieCastItem key={el.id} {...el} />
      ))}
    </ul>
  );
};
