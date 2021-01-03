import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Container from './components/Container';
import Loader from './components/Loader';
import AppBar from './components/AppBar';

const HomePage = lazy(() =>
  import('./view/HomePage' /* webpackChunkName: 'HomePage' */),
);

const MoviesPage = lazy(() =>
  import('./view/MoviesPage' /* webpackChunkName: "MoviesPage" */),
);

const NotFoundView = lazy(() =>
  import('./view/NotFound' /* webpackChunkName: "NotFoundView" */),
);

const MoviesDetailsPage = lazy(() =>
  import('./view/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */),
);

export default function App() {
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

          <Route path="/movies/:movieId">
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
