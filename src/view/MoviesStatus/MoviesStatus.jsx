import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchSearchMovies } from '../../services/movies-api';
import ErrorMovies from '../../components/ErrorMovies';
import Loader from '../../components/Loader';
import MoviesGallery from '../MoviesGallery';
import style from './MoviesStatus.module.css';
import Status from '../../services/status';

function MoviesStatus({ filmName, queryURL }) {
  const [error, setError] = useState({});
  const [status, setStatus] = useState(Status.IDLE);
  const [films, setFilms] = useState([]);

  const fetchFilms = name => {
    fetchSearchMovies(name)
      .then(newFilms => {
        if (newFilms.total_results > 0) {
          setFilms(newFilms.results);
          setStatus(Status.RESOLVED);
        } else return Promise.reject(new Error('Invalid request'));
      })
      .catch(err => {
        setError(err);
        setStatus(Status.REJECTED);
      });
  };

  useEffect(() => {
    if (filmName === '' && queryURL !== null) {
      fetchFilms(queryURL);
      return;
    }
    if (filmName) {
      fetchFilms(filmName);
    }
  }, [filmName, queryURL]);

  if (status === Status.IDLE) {
    return <p className={style.message}>Please enter your search term</p>;
  }

  if (status === Status.PENDING) {
    return <Loader />;
  }

  if (status === Status.REJECTED) {
    return <ErrorMovies message={error.message} />;
  }

  if (status === Status.RESOLVED) {
    return (
      <>
        <MoviesGallery films={films} />
      </>
    );
  }

}

  MoviesStatus.propTypes = {
    filmName: PropTypes.string.isRequired,
    queryURL: PropTypes.string,
  };

  export default MoviesStatus;