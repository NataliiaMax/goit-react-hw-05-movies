import style from './InfoMovy.module.css';
import PropTypes from 'prop-types';

const InfoMovy = ({ movie }) => {
  const { title, vote_average, overview, genres, poster_path, release_date } =
    movie;

  return (
    <div className={style.detailsWrapper}>
      <h1>{title}</h1>
      <p>Release date: {release_date}</p>
      <img
        src={`https://image.tmdb.org/t/p/w780${poster_path}`}
        alt={title}
        width="300"
      />
      <p>User score: {vote_average}%</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{genres?.map(genre => genre.name).join(', ')}</p>
    </div>
  );
};

InfoMovy.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      vote_average: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      genres: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
    })
  ),
};

export default InfoMovy;
