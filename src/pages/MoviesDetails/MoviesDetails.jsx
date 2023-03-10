import style from './MoviesDetails.module.css';
import { useEffect, useState, Suspense } from 'react';
import {
  useParams,
  Outlet,
  NavLink,
  Link,
  useLocation,
} from 'react-router-dom';
import { getMoviesDetails } from '../../api/Movies-fetch';
import InfoMovy from 'components/InfoMovy/InfoMovy';
import PropTypes from 'prop-types';

const MoviesDetails = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const location = useLocation();
  const cameBack = location.state?.from ?? '/';
  useEffect(() => {
    getMoviesDetails(id).then(setMovie);
  }, [id]);

  if (!id) {
    return;
  }

  return (
    <div>
      <Link to={cameBack} state={{ from: location }}>
        <p className={style.backText}>Go back</p>
      </Link>
      {movie && <InfoMovy movie={movie} />}
      <div className={style.addInfoWrapper}>
        <h2 className={style.addInfoTitle}>Additional information</h2>
        <ul className={style.addInfoList}>
          <li className={style.addInfoItem}>
            <NavLink
              to="cast"
              state={{ from: cameBack }}
              className={({ isActive }) =>
                isActive ? `${style.active}` : `${style.inActive}`
              }
            >
              Cast
            </NavLink>
          </li>
          <li className={style.addInfoItem}>
            <NavLink
              to="reviews"
              state={{ from: cameBack }}
              className={({ isActive }) =>
                isActive ? `${style.active}` : `${style.inActive}`
              }
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Suspense fallback={<p>Please Wait</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

MoviesDetails.propTypes = {
  movie: PropTypes.object,
};

export default MoviesDetails;
