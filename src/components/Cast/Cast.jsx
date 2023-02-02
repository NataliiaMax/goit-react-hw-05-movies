import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCast } from '../../api/Movies-fetch';
import style from './Cast.module.css';
import PropTypes from 'prop-types';
import notFoundImage from '../../images/notFoundImage.jpg';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      return;
    }

    getMoviesCast(id).then(setCast);
  }, [id]);

  return (
    <div>
      <ul className={style.castList}>
        {cast?.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : notFoundImage
              }
              alt={name}
              width="100"
            />
            <div className={style.castConteinerText}>
              <p>{name}</p>
              <p>Character: {character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      profile_path: PropTypes.string.isRequired,
    })
  ),
};

export default Cast;
