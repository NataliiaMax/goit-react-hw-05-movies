import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from '../../hooks/useDebounce';

const DEBOUNCE_TIME_MS = 500;

const Movies = ({ query }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(query);
  const debouncedSearchQuery = useDebounce(searchQuery, DEBOUNCE_TIME_MS);

  useEffect(() => {
    if (!debouncedSearchQuery) {
      searchParams.delete('query');
      setSearchParams(searchParams);
      return;
    }
    setSearchParams({ query: debouncedSearchQuery });
  }, [searchParams, debouncedSearchQuery, setSearchParams]);

  return (
    <>
      <input
        placeholder="Enter your search query"
        onChange={event => setSearchQuery(event.target.value)}
        value={searchQuery}
      />
    </>
  );
};

export default Movies;
