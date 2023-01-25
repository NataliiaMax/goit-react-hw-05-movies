import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesRevieews } from '../../api/Movies-fetch';
import style from './Reviews.module.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [noReviews, setNoReviews] = useState([]);
  const { id } = useParams();

    useEffect(() => {
        if (!id) {
            return;
        }

        getMoviesRevieews(id).then(response => {
            setReviews(response.results);
            if (response.results.length === 0) {
                setNoReviews("We don't have any reviews for this movie");
            }
        })
    }, [id]);

  return (
    <div className={style.reviewsWrapper}>
      <div>{noReviews}</div>
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h3>Author:{author}</h3>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
