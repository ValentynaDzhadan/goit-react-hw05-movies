import { getTrendingMovies } from 'api/movie-service';
import { Loader } from 'components/Loader/Loader';
import { useFetchData } from 'hooks/useFetchData';
import { MoviesList } from '../../components/MoviesList/MoviesList';

export const Home = () => {
  console.log('Home');

  const { data: movies, isError, isLoading } = useFetchData(getTrendingMovies);

  if (isError) {
    return <p>Error</p>;
  }
  return (
    <>
      <h1>Trending Movies</h1>
      {isLoading ? <Loader /> : movies && <MoviesList movies={movies} />}
    </>
  );
};
