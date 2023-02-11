import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './MoviesSearchList.module.css';

const SearchMoviesPage = ({ movies }) => {
  const location = useLocation();

  return (
    <div className={style.moviesSearchListWrapper}>
      <ul className={style.moviesSearchListCatalog}>
        {movies?.map(({ id, title }) => (
          <li key={id} className={style.moviesSearchListItem}>
            <Link to={`/movies/${id}`} state={{from: location }}>
              <h4 className={style.moviesSearchListTitle}>{title}</h4>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

SearchMoviesPage.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default SearchMoviesPage;
