import { getMovieReviews } from 'api/movie-service';
import { useFetchData } from 'hooks/useFetchData';
import { MovieReviewsList } from 'components/MovieReviewsList/MovieReviewsList';
import { Loader } from 'components/Loader/Loader';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  console.log('Reviews');

  const { movieId } = useParams();

  const { data: reviews, isError, isLoading } = useFetchData(
    () => getMovieReviews(movieId),
    [movieId]
  );

  if (isError) {
    return <p>Error</p>;
  }
  return (
    <>
      <h1>Movie Cast</h1>
      {isLoading ? (
        <Loader />
      ) : (
        reviews && <MovieReviewsList reviews={reviews} />
      )}
    </>
  );
};
