import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchMovieCast } from '../../services/movies-api'; // Инф. об актерском составе
import style from './Cast.module.css';
import noImageFound from '../../img/Photos.png';

export default function Cast({ movieId }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId).then(request => setCast(request.cast));
  }, [movieId]);

  return (
    <>
      {cast && (
        <>
        
          <ul className={style.list}>
            {cast.map(item => (
              <li key={item.id} className={style.item}>
                <img
                  className={style.image}
                  src={
                    item.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${item.profile_path}`
                      : noImageFound
                  }
                  alt={item.name}
                  width="100"
                  height="150"
                />
                <p> {item.original_name}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
};
