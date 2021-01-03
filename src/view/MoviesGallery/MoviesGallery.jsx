import { Link, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { URL } from '../../services/movies-api';
import style from './MoviesGallery.module.css';

export default function MoviesGallery({ films }) {
  const { url } = useRouteMatch();

  return (
    <ul className={style.list}>
    
      {films.map(film => (
        <>
          {film.poster_path && ( 
            <li key={film.id} className={style.item}>
              <Link
                to={`${url}/${film.id}`} 
                className={style.link}
              >
                <img
                  className={style.image}
                  src={URL + film.poster_path}
                  alt={film.title}
                  width="300"
                  height="450"
                />
                
                <p className={style.filmTitle}>{film.title}</p>
              </Link>
            </li>
          )}
        </>
      ))}
    </ul>
  );
}

MoviesGallery.propTypes = {
  films: PropTypes.array,
};
