import { useState, useEffect, Suspense } from 'react';
import {
  useParams,
  NavLink,
  Route,
  useRouteMatch,
  Switch,
  useLocation,
  useHistory,
} from 'react-router-dom';
import { fetchMovieDetails, URL } from '../../services/movies-api';
import Cast from '../Cast';
import Reviews from '../Reviews';
import Loader from '../../components/Loader';

import style from './MoviesDetailsPage.module.css';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const [film, setFilm] = useState({});
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    fetchMovieDetails(movieId).then(setFilm);
  }, [movieId]);

   const handleGoBack = () => {
     history.push(location?.state?.from ?? '/');
    //  console.log(location.state.from);
   };

  return (
    <div>
      <div className={style.wrapper}>
        <img
          className={style.image}
          src={URL + film.poster_path}
          alt={film.title}
          width="300"
          height="450"
        />
        <div className={style.rightPart}>
          <h2 className={style.title}>{film.title}</h2>
          <span className={style.subtitle}>Rating </span>
          <span>{film.vote_average}</span>
          <p className={style.subtitle}>Overview</p>
          <p>{film.overview}</p>

          {film.genres && (
            <>
              <p className={style.subtitle}>Genres</p>
              <ul className={style.list}>
                {film.genres.map((item, index) => (
                  <li key={index} className={style.item}>
                    {item.name}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>

      <nav className={style.nav}>
        <NavLink
          to={`${url}/cast`}
          className={style.link}
          activeClassName={style.activeLink}
        >
          Cast
        </NavLink>
        <NavLink
          to={`${url}/reviews`}
          className={style.link}
          activeClassName={style.activeLink}
        >
          Reviews
        </NavLink>
      </nav>
      <button onClick={handleGoBack} type="button" className={style.btn}>
        Go back
      </button>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path={`${path}:movieId/cast`}>
            <Cast movieId={movieId} />
          </Route>

          <Route path={`${path}:movieId/reviews`}>
            <Reviews movieId={movieId} />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}
