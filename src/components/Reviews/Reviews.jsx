import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/movies-api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Status from '../../services/status';
import Loader from '../Loader';
import ErrorMovies from '../ErrorMovies';
import style from './Reviews.module.css';

function Reviews() {
  const { slug } = useParams();
  const movieId = slug.match(/[a-z0-9]+$/)[0];
  const location = useLocation();
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  const page = new URLSearchParams(location.search).get('page') ?? 1;

  useEffect(() => {
    
      fetchMovieReviews(movieId, page)
        .then(({ results }) => {
          if (results.length === 0) {
            toast.error('No review for this request');
            setStatus(Status.IDLE);
            return;
          }
          setReviews(results);
          setStatus(Status.RESOLVED);
        })
        .catch(error => {
          console.log(error);
          setError('Something went wrong. Try again.');
          setStatus(Status.REJECTED);
        });
  }, [movieId, page]);

  return (
    <>
      {status === Status.PENDING && <Loader />}

      {status === Status.REJECTED && <ErrorMovies message={error.message} />}

      {status === Status.RESOLVED && (
        <div className={style.wrapper}>
          <ul className={style.list}>
            {reviews.map(review => (
              <li key={review.id} className={style.item}>
                <p className={style.title}> {review.author}</p>
                <p> {review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Reviews;
