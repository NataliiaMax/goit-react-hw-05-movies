import style from './MoviesDetails.module.css';
import { useEffect, useState,  } from 'react';
import { useParams, Link, useLocation,Outlet } from 'react-router-dom';
import { getMoviesDetails } from '../../api/Movies-fetch';
import InfoMovy from 'components/InfoMovy/InfoMovy';

const MoviesDetails = () => {
      const [movy, setMovy] = useState([]);
      const { id } = useParams();
      const location = useLocation();

      useEffect(() => {
        if (!id) {
          return;
        }

        getMoviesDetails(id)
          .then(setMovy);
          }, [id]);

            return (
              <div className={style.moviesDetailsContainer}>
                <Link to={location.state?.from ?? '/movies'}>Go back</Link>
                {movy && <InfoMovy movy={movy} />}

                <div className={style.addWrapper}>
                  <h4 className={style.addTitle}>Additional information</h4>
                  <ul className={style.addList}>
                    <li className={style.addItem}>
                      <Link to="cast" state={location.state}>
                        Cast
                      </Link>
                    </li>
                    <li className={style.addItem}>
                      <Link to="reviews" state={location.state}>
                        Reviews
                      </Link>
                    </li>
                  </ul>
                </div>
                <Outlet />
              </div>
            );
    };

  export default MoviesDetails;
