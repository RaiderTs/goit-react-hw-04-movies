import { useState, useEffect, lazy, Suspense } from 'react';
import {
  NavLink,
  Route,
  useParams,
  useRouteMatch,
  // Switch,
  useLocation,
  useHistory,
} from 'react-router-dom';
import { fetchMovieDetails } from '../../services/movies-api';
// import Cast from '../Cast';
import Status from '../../services/status';
// import Reviews from '../Reviews';
import Loader from '../../components/Loader';
import noImageFound from '../../img/Photos.png';
import ErrorMovies from '../../components/ErrorMovies';
import style from './MoviesDetailsPage.module.css';

const Cast = lazy(() =>
  import('../../components/Cast' /* webpackChunkName: "cast-subview"*/),
);

const Reviews = lazy(() =>
  import('../../components/Reviews' /* webpackChunkName: "reviews-subview"*/),
);

export default function MovieDetailsPage() {
  const { slug } = useParams();
  const movieId = slug.match(/[a-z0-9]+$/)[0];
  // const { movieId } = useParams();
  const location = useLocation();
  const history = useHistory();
  const { url, path } = useRouteMatch();
  const [film, setFilm] = useState({});
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  // useEffect(() => {
  //   fetchMovieDetails(movieId).then(setFilm);
  // }, [movieId]);

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(({ poster_path, original_title, popularity, overview, genres }) => {
        setFilm({
          src: poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : `${noImageFound}`,
          title: original_title,
          score: popularity.toFixed(1),
          overview,
          genres,
        });
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        console.log(error);
        setError(error.message);
        setStatus(Status.REJECTED);
      });
  }, [movieId]);

  const handleGoBack = () => {
    history.push(location?.state?.from ?? '/');
    //  console.log(location.state.from);
  };

  return (
    <div>
      {status === Status.PENDING && <Loader />}

      {status === Status.REJECTED && <ErrorMovies message={error} />}

      {status === Status.RESOLVED && (
        <>
          <div className={style.wrapper}>
            <img
              className={style.image}
              src={film.src}
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
                    {film.genres.map(genre => (
                      <li key={genre.id} className={style.item}>
                        {genre.name}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>

          <nav className={style.nav}>
            <NavLink
              to={{
                pathname: `${url}/cast`,
                state: { from: location?.state?.from ?? '/' },
              }}
              className={style.link}
              activeClassName={style.activeLink}
            >
              Cast
            </NavLink>
            <NavLink
              to={{
                pathname: `${url}/reviews`,
                state: { from: location?.state?.from ?? '/' },
              }}
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
            {/* <Switch> */}
            <Route path={`${path}/cast`}>
              {status === Status.RESOLVED && <Cast />}
            </Route>

            <Route path={`${path}/reviews`}>
              {status === Status.RESOLVED && <Reviews />}
            </Route>
            {/* </Switch> */}
          </Suspense>
        </>
      )}
    </div>
  );
}
