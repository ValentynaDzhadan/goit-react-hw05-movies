import { getMovieCredits } from 'api/movie-service';
import { useFetchData } from 'hooks/useFetchData';
import { MovieCastList } from 'components/MovieCastList/MovieCastList';
import { Loader } from 'components/Loader/Loader';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  console.log('Cast');

  const { movieId } = useParams();

  const { data: cast, isError, isLoading } = useFetchData(
    () => getMovieCredits(movieId),
    [movieId]
  );

  if (isError) {
    return <p>Error</p>;
  }
  return (
    <>
      <h1>Movie Cast</h1>
      {isLoading ? <Loader /> : cast && <MovieCastList cast={cast} />}
    </>
  );
};
