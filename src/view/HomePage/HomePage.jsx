import { useState, useEffect } from 'react';
import { Link, useRouteMatch, useLocation, useHistory } from 'react-router-dom'; 
import { fetchTrending, URL } from '../../services/movies-api'; 
import { Pagination } from '@material-ui/lab';
import Status from '../../services/status'; 
import useStyles from '../../services/StylesPagination';

import Loader from '../../components/Loader'; 
import ErrorMovies from '../../components/ErrorMovies'; // Для ошибки
import style from './HomePage.module.css'; 

export default function HomePage() {
  const { url } = useRouteMatch(); 
  const [films, setFilms] = useState([]);
  const [error, setError] = useState({});
  const [status, setStatus] = useState(Status.PENDING);
  const [totalPage, setTotalPage] = useState(0);
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const page = new URLSearchParams(location.search).get('page') ?? 1;


  useEffect(() => {
    setStatus(Status.PENDING);
    fetchTrending(page)
      .then(({ results, total_pages }) => {
        setFilms(results);
        setTotalPage(total_pages);
        setStatus(Status.RESOLVED);
      })
      // .then(setStatus(Status.RESOLVED))
      .catch(err => {
        setError('Something went wrong. Try again.');
        setStatus(Status.REJECTED);
      });
  }, [page]);

    const onHandlePage = (event, page) => {
      history.push({ ...location, search: `page=${page}` });
    };

  if (status === Status.PENDING) {
    return <Loader />;
  }

  if (status === Status.REJECTED) {
    return <ErrorMovies message={error.message} />;
  }

  if (status === Status.RESOLVED) {
    return (
      <>
        {films && (
          <>
            
            <h2 className={style.title}>Trending today</h2>
            <ul className={style.list}>
              
              {films.map(film => (
                <li key={film.id} className={style.item}>
                  <Link
                    to={`${url}movies/${film.id}`} 
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
              ))}
            </ul>
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
}
