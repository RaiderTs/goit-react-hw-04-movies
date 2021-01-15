import { lazy, Suspense, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addBackToTop } from 'vanilla-back-to-top';

import Container from '../Container';
import Loader from '../Loader';
import AppBar from '../AppBar';

const HomePage = lazy(() =>
  import('../../view/HomePage' /* webpackChunkName: 'HomePage' */),
);

const MoviesPage = lazy(() =>
  import('../../view/MoviesPage' /* webpackChunkName: "MoviesPage" */),
);

const NotFoundView = lazy(() =>
  import('../NotFound' /* webpackChunkName: "NotFoundView" */),
);

const MoviesDetailsPage = lazy(() =>
  import('../../view/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */),
);

export default function App() {
  useEffect(() => {
    addBackToTop({
      backgroundColor: '#f7de03',
      textColor: 'black',
    });
  }, []);

  return (
    <Container>
      <AppBar />

      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:slug">
            <MoviesDetailsPage />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
      <ToastContainer autoClose={3000} />
    </Container>
  );
}
