import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { searchMoviesByQuery } from '../api/Movies-fetch';
// import PropTypes from 'prop-types';
// import Accordion from '../../components/Accordion/Accordion';

const SearchMoviesPage = () => {
          const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const location = useLocation();
//   const isSearchOpen = location.state?.isSearchOpen;

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    searchMoviesByQuery(query).then(setMovies);
  }, [query]);
    
  return (
    <div>
      {/* <Accordion
        title={'Search giphs from Giphy'}
        content={<GiphsSearch query={query} />}
        isOpen={isSearchOpen}
      /> */}

      <ul>
        
        {movies.map(movy => (<li key={movy.id}>
          <Link to={`/movies/${movy.id}`} state={{ from: location }}>
            <h4>{movy.title}</h4>
          </Link></li>
        ))}
      </ul>
    </div>
  );
};

export default SearchMoviesPage;
