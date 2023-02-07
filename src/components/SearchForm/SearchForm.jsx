import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [value, setValue] = useState(query);
  const handleChange = event => {
    setValue(event.target.value);
  };
  const onSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: value });
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={handleChange}
        value={value}
        className="bg-gray-100 w-full p-3 rounded-lg pl-12 text-md font-medium"
        type="text"
        placeholder="Enter name of the movie..."
      />
      <button type="submit">Search</button>
    </form>
  );
};
