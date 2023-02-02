import style from './InfoMovy.module.css';
import PropTypes from 'prop-types';

const InfoMovy = ({ movie }) => {
  const { title, vote_average, overview, genres, poster_path, release_date } =
    movie;

  return (
    <div className={style.detailsWrapper}>
      <div className={style.detailsInnerWrapper}>
        <div className={style.detailsWrapperImg}>
          <img
            className={style.detailsImg}
            src={`https://image.tmdb.org/t/p/w780${poster_path}`}
            alt={title}
            width="300"
          />
        </div>
        <div className={style.detailsWrapperInfo}>
          <h1 className={style.detailsTitle}>{title}</h1>
          <p className={style.detailsText}>
            <b>Release date:</b>{' '}
            {`${release_date?.split('-').reverse().join('-')}`}
          </p>
          <p className={style.detailsText}>
            <b> User score:</b> {Math.round((vote_average / 10) * 100)}%
          </p>
          <p className={style.detailsText}>
            <b>Overview:</b> {overview}
          </p>
          <p className={style.detailsText}>
            <b>Genres:</b> {genres?.map(genre => genre.name).join('/')}
          </p>
        </div>
      </div>
    </div>
  );
};

InfoMovy.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      vote_average: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      genres: PropTypes.string.isRequired,
      release_date: PropTypes.number.isRequired,
    })
  ),
};

export default InfoMovy;
