import PropTypes from 'prop-types';

export const Button = ({ onClick }) => (
  <button type="button" className="Button" onClick={onClick}>
    More
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};