import style from './InfoMovy.module.css';
import PropTypes from 'prop-types';
import notFoundImage from '../../images/notFoundImage.jpg';

const InfoMovy = ({
  movie: { title, poster_path, vote_average, overview, genres, release_date },
}) => {
  function placeholder(poster_path) {
    if (poster_path == null) {
      return notFoundImage;
    }
    return `https://image.tmdb.org/t/p/w300${poster_path}`;
  }

  return (
    <div className={style.detailsWrapper}>
      <div className={style.detailsInnerWrapper}>
        <div className={style.detailsWrapperImg}>
          <img
            className={style.detailsImg}
            src={placeholder(poster_path)}
            alt={title}
            width="300"
          />
        </div>
        <div className={style.detailsWrapperInfo}>
          <h1 className={style.detailsTitle}>
            {title}{' '}
            <span className={style.detailsSpan}>
              ({`${release_date?.slice(0, 4)}`})
            </span>
          </h1>
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
  movie: PropTypes.object,
};

export default InfoMovy;
