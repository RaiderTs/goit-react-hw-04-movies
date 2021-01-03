import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Searchbar from '../../components/Searchbar';
import MoviesStatus from '../MoviesStatus';

export default function MoviesPage() {
  const history = useHistory();
  const location = useLocation();
  const [filmName, setFilmName] = useState('');
  const [, setFilms] = useState([]);

  const queryURL = new URLSearchParams(location.search).get('query');

  const onQueryChange = query => {
    history.push({ ...location, search: `query=${query}` });
  };

  const onSubmit = name => {
    setFilmName(name);
    setFilms([]);
    onQueryChange(name);
  };

  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      <MoviesStatus filmName={filmName} queryURL={queryURL} />
    </>
  );
}
