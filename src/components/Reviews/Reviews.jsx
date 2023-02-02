import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesRevieews } from '../../api/Movies-fetch';
import style from './Reviews.module.css';
import PropTypes from 'prop-types';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      return;
    }

    getMoviesRevieews(id).then(setReviews);
  }, [id]);

  return (
    <div className={style.reviewsWrapper}>
      <ul className={style.reviewsList}>
        {reviews && reviews.length ? (
          reviews?.map(({ id, author, content }) => (
            <li className={style.reviewsItem} key={id}>
              <h3 className={style.reviewsTitle}>Author: {author}</h3>
              <p className={style.reviewsContent}>{content}</p>
            </li>
          ))
        ) : (
          <li>We don't have any reviews for this movie.</li>
        )}
      </ul>
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};

export default Reviews;
