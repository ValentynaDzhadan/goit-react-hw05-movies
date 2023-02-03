import { getMovieDetails } from 'api/movie-service';
import { useFetchData } from 'hooks/useFetchData';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { Loader } from 'components/Loader/Loader';
import { useLocation, useParams } from 'react-router-dom';
import { GoBackBtn } from 'components/GoBackBtn/GoBackBtn';

export const MovieDetails = () => {
  console.log('MovieDetails');
  const location = useLocation();
  const { movieId } = useParams();

  const { data: movie, isError, isLoading } = useFetchData(
    () => getMovieDetails(movieId),
    [movieId]
  );

  if (isError) {
    return <p>Error</p>;
  }

  return (
    <>
      <h1>Movie Details</h1>
      <GoBackBtn path={location.state?.from}></GoBackBtn>
      {isLoading ? <Loader /> : movie && <MovieCard movie={movie} />}
    </>
  );
};

// import { Suspense } from 'react';
// import { Outlet as RouterOutlet } from 'react-router-dom';
// import { Loader } from '../loader/Loader';

// export const Outlet = ({ className, ...props }) => {
//   return (
//     <Suspense fallback={<Loader className={className} />}>
//       <RouterOutlet {...props} />
//     </Suspense>
//   );
// };
