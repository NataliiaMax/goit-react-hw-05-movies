// import style from './MoviesDetails.module.css';
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

const MoviesDetails = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMoviesDetails(id).then(setMovie);
  }, [id]);

  if (!id) {
    return;
  }

  return (
    <div>
      <Link to={location.state?.from ?? '/'} state={location}>
        Go back
      </Link>
      {movie && <InfoMovy movie={movie} />}
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>
      <Suspense fallback={<p>Please Wait</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MoviesDetails;
