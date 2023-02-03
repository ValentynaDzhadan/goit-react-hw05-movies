import { getSearchedMovie } from 'api/movie-service';
import { useFetchData } from 'hooks/useFetchData';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { Loader } from 'components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const Movies = () => {
  console.log('MovieDetails');

  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  const { data: movies, isError, isLoading } = useFetchData(() => {
    if (query) {
      return getSearchedMovie(query);
    }
    return null;
  }, [query]);

  console.log(movies);

  if (isError) {
    return <p>Error</p>;
  }
  return (
    <>
      <h1>Movie Search</h1>
      <SearchForm />
      {isLoading ? <Loader /> : movies && <MoviesList movies={movies} />}
    </>
  );
};
