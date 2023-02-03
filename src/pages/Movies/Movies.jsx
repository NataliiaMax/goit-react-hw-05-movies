import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ImSearch } from 'react-icons/im';
import style from './Movies.module.css';
import { searchMoviesByQuery } from '../../api/Movies-fetch';
import { toast } from 'react-toastify';
import SearchMoviesPage from 'components/MoviesSearchList/MoviesSearchList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const searchMovy = searchParams.get('query') ?? '';
  const [searchQuery, setSearchQuery] = useState(searchMovy);

  const handleSubmit = e => {
    e.preventDefault();

    if (searchQuery === '') {
      return toast.error('Please enter image title!', {
        position: 'top-center',
        autoClose: 3000,
        theme: 'colored',
      });
    }
    setSearchParams({ query: searchQuery });
    setSearchQuery('');
  };

  useEffect(() => {
    if (!searchMovy) {
      return;
    }

    searchMoviesByQuery(searchMovy).then(setMovies);
  }, [searchMovy, setMovies]);

  return (
    <div className={style.formContainer}>
      <form className={style.form} onSubmit={handleSubmit}>
        <button type="submit" className={style.formButton}>
          <ImSearch style={{ marginRight: 8 }} />
          <span className={style.formButtonLabel}></span>
        </button>
        <input
          className={style.formInput}
          placeholder="Search"
          onChange={event => setSearchQuery(event.target.value)}
          value={searchQuery}
        />
      </form>

      <main>
        <SearchMoviesPage movies={movies} />
      </main>
    </div>
  );
};

export default Movies;
