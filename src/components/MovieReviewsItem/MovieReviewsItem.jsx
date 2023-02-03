export const MovieReviewsItem = ({ author, content }) => {
  return (
    <li>
      <h2>Author: {author}</h2>
      <span>{content}</span>
    </li>
  );
};
