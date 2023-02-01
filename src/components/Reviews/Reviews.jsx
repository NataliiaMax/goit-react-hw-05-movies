import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesRevieews } from '../../api/Movies-fetch';
import style from './Reviews.module.css';
import PropTypes from 'prop-types';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [noReviews, setNoReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      return;
    }

    getMoviesRevieews(id).then(setReviews);
    if (setReviews === 0) {
      setNoReviews("We don't have any reviews for this movie");
    }
  }, [id]);

  return (
    <div className={style.reviewsWrapper}>
      <div className={style.reviewsNotFound}>{noReviews}</div>
      <ul className={style.reviewsList}>
        {reviews?.map(({ id, author, content }) => (
          <li className={style.reviewsItem} key={id}>
            <h3 className={style.reviewsTitle}>Author: {author}</h3>
            <p className={style.reviewsContent}>{content}</p>
          </li>
        ))}
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
