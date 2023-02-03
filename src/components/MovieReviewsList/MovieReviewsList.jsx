import { MovieReviewsItem } from 'components/MovieReviewsItem/MovieReviewsItem';

export const MovieReviewsList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(el => (
        <MovieReviewsItem key={el.id} {...el} />
      ))}
    </ul>
  );
};
