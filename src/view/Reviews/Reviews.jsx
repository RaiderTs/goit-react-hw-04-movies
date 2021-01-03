import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchMovieReviews } from '../../services/movies-api';
import style from './Reviews.module.css';

// Информация об обзорах
export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(data => setReviews(data.results));
  }, [movieId]);

  return (
    <div className={style.wrapper}>
      {reviews.length > 0 ? (
        <>
          <ul className={style.list}>
            {reviews.map((item, index) => (
              <li key={index} className={style.item}>
                <p className={style.title}> {item.author}</p>
                <p> {item.content}</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className={style.text}>No reviews to show</p>
      )}
    </div>
  );
}

Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};
