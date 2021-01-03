import PropTypes from 'prop-types';
import errorImage from '../../img/—Pngtree—red gradient ring fork symbol_4609561.png';
import style from './ErrorMovies.module.css';

function ErrorImage({ message }) {
  return (
    <div role="alert" className={style.errorWrapper}>
      <img src={errorImage} width="650" alt="Error" />
      <p text={message} className={style.text}>
        Sorry, something went wrong. Error: {message}
      </p>
    </div>
  );
}

ErrorImage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorImage;
