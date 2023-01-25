import style from './InfoMovy.module.css';
import PropTypes from 'prop-types';

const InfoMovy = ({movy}) => {
    //   const {
    //     title,
    //     vote_average,
    //     overview,
    //     genres,
    //     poster_path,
    //     release_date,
    // } = movy;
    
  return (
    <div className={style.detailsWrapper}>
      <h1 className={style.detailsTitle}>
        {`${movy.title} (${
          movy.release_date && movy.release_date.slice(0, 4)
        })`}
      </h1>
      <img
        className={style.detailsImg}
        src={
          movy.poster_path &&
          `https://image.tmdb.org/t/p/w500${movy.poster_path}`
        }
        alt={movy.title}
      />
      <p className={style.detailsText}>
        User Score: {Math.round((movy.vote_average / 10) * 100)}%
      </p>
      <h2 className={style.detailsName}>Overview</h2>
      <p className={style.detailsText}>{movy.overview}</p>
      <h2 className={style.detailsName}>Genres</h2>
      <p className={style.detailsText}>
        {movy.genres?.map(genre => genre.name).join(', ')}
      </p>
    </div>
  );
};

InfoMovy.propTypes = {
  movy: PropTypes.arrayOf(
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
