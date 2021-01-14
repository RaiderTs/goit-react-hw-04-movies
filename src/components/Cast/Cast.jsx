import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { toast } from 'react-toastify';
import { fetchMovieCast } from '../../services/movies-api'; 
import Loader from '../Loader';
import ErrorMovies from '../ErrorMovies';
import style from './Cast.module.css';
import noImageFound from '../../img/Photos.png';
import Status from '../../services/status';

export default function Cast() {
  const { slug } = useParams();
  const movieId = slug.match(/[a-z0-9]+$/)[0];
  const [authors, setAuthors] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    fetchMovieCast(movieId)
      .then(({ cast }) => {
        if (cast.length === 0) {
          toast.error('No results!');
          setStatus(Status.IDLE);
          return;
        }
        setAuthors(cast);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        console.log(error);
        setError('Something went wrong. Try again.');
        setStatus(Status.REJECTED);
      });
  }, [movieId]);




  return (
    <>
      {status === Status.PENDING && <Loader />}

      {status === Status.REJECTED && <ErrorMovies message={error.message} />}

      {status === Status.RESOLVED && (
        <ul className={style.list}>
          {authors.map(author => (
            <li key={author.id} className={style.item}>
              <img
                className={style.image}
                src={
                  author.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${author.profile_path}`
                    : noImageFound
                }
                alt={author.name}
                width="100"
                height="150"
              />
              <p> {author.original_name}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

