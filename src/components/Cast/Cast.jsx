import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCast } from '../../api/Movies-fetch';
import style from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      return;
    }

    getMoviesCast(id).then(response => setCast(response.cast));
  }, [id]);

  return (<div>
    <ul className={style.castList}>
      {cast.slice(0, 10).map(({ id, name, character, profile_path }) => (
        <li key={id}>
          <img
            src={`https://image.tmdb.org/t/p/original/${profile_path}`}
            alt={name}
            width="100"
          />
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
      </ul>
      </div>
  );
};

export default Cast;
