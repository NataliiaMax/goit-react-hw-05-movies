import style from './Home.module.css';
import { useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../api/Movies-fetch'
// import { NavLink } from 'react-router-dom';

const HomePage = () => {
  const [listMovies, setListMovies] = useState([]);
  const location = useLocation();
  //   const isSearchOpen = location.state?.isSearchOpen;

  useEffect(() => {
    getTrendingMovies().then(setListMovies);
  }, []);
    
  return (
    <div className={style.homePageContainer}>
      <ul className={style.homePageList}>
        {listMovies.map(({ id, title, path_poster }) => (
          <li key={id} className={style.homePageItem}>
            <Link to={`/movies/${id}`} state={location}>
              <h4 className={style.homePageTitle}>{title}</h4>
              <img
                className={style.homePageImage}
                src={path_poster}
                alt={title}
              ></img>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
