import { useState, useEffect } from 'react';
import { Link, useRouteMatch, useHistory, useLocation } from 'react-router-dom';
import { fetchSearchMovies } from '../../services/movies-api';
import slugify from 'slugify';
import { Pagination } from '@material-ui/lab';
import useStyles from '../../services/StylesPagination';
import Status from '../../services/status';
import Loader from '../../components/Loader';
import ErrorMovies from '../../components/ErrorMovies';
import Searchbar from '../../components/Searchbar';
import noImageFound from '../../img/Photos.png';
import style from './MoviesPage.module.css';

const makeSlug = string => slugify(string, { lower: true });


export default function MoviesPage() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const { url } = useRouteMatch();
  const [query, setQuery] = useState('');
  const [totalPage, setTotalPage] = useState(0);
  const [films, setFilms] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  const page = new URLSearchParams(location.search).get('page') ?? 1;

  // const onQueryChange = query => {
  //   history.push({ ...location, search: `query=${query}` });
  // };



  useEffect(() => {
    if (location.search === '') {
      return;
    }

    const newSearch = new URLSearchParams(location.search).get('query');
    setQuery(newSearch, page);
  }, [location.search, page]);





  useEffect(() => {
    if (!query) return;
    setStatus(Status.PENDING);
    fetchSearchMovies(query, page)
      .then(({ results, total_pages }) => {
        if (results.length === 0) {
          setError(`No results were found for ${query}!`);
          setStatus(Status.REJECTED);
          return;
        }

        setFilms(results);
        setTotalPage(total_pages);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        console.log(error);
        setError(error.message);
        setStatus(Status.REJECTED);
      });
  }, [query, page]);





  const searchImages = newSearch => {
    if (query === newSearch) return;
    setQuery(newSearch);
    setFilms(null);
    setError(null);
    setStatus(Status.IDLE);
    history.push({ ...location, search: `query=${newSearch}&page=1` });
  };
 
  const onHandlePage = (event, page) => {
    history.push({ ...location, search: `query=${query}&page=${page}` });
  };


  return (
    <>
      <Searchbar onSubmit={searchImages} />

      {status === Status.PENDING && <Loader />}

      {status === Status.REJECTED && <ErrorMovies message={error.message} />}

      {status === Status.RESOLVED && (
        <>
          <ul className={style.list}>
            {films.map((film ) => (
              <>
                {film.poster_path && (
                  <li key={film.id} className={style.item}>
                    <Link
                      to={{
                        pathname: `${url}/${makeSlug(
                          `${film.title} ${film.id}`,
                        )}`,
                        state: { from: location },
                      }}
                      className={style.link}
                    >
                      <img
                        src={
                          film.poster_path
                            ? `https://image.tmdb.org/t/p/w500/${film.poster_path}`
                            : noImageFound
                        }
                        alt={film.title}
                        className={style.image}
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
          {totalPage > 1 && (
            <Pagination
              className={classes.root}
              count={10}
              onChange={onHandlePage}
              page={Number(page)}
              showFirstButton
              showLastButton
              size="large"
              shape="rounded"
              variant="outlined"
            />
          )}
        </>
      )}
    </>
  );
}

