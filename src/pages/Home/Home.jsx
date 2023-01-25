import style from './Home.module.css';
import { useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../api/Movies-fetch';
import PropTypes from 'prop-types';

const HomePage = () => {
  const [listMovies, setListMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovies().then(setListMovies);
  }, []);

  return (
    <div className={style.homePageContainer}>
      <h1 className={style.homePageName}>Trending today</h1>
      <ul className={style.homePageList}>
        {listMovies.map(({ id, title, poster_path }) => (
          <li key={id} className={style.homePageItem}>
            <Link to={`/movies/${id}`} state={location}>
              <h4 className={style.homePageTitle}>{title}</h4>
              <img
                className={style.homePageImage}
                src={`https://image.tmdb.org/t/p/w780${poster_path}`}
                alt={title}
                width='200'
              ></img>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

HomePage.propTypes = {
  listMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ),
};

export default HomePage;
