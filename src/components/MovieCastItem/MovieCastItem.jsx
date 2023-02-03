export const MovieCastItem = ({ character, name, profile_path }) => {
  return (
    <li>
      {profile_path && (
        <img
          src={`https://image.tmdb.org/t/p/w200${profile_path}`}
          alt={name}
        />
      )}
      <h2>{name}</h2>
      <span>Character: {character}</span>
    </li>
  );
};
