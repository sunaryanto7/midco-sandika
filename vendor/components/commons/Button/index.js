import PropTypes from 'prop-types';

const Button = ({ children, fullWidth, btnDanger, btnWhite, btnTransparent, onClick, className }) => {
  const styles = classNames(
    'button',
    fullWidth && 'button_full_width',
    btnDanger && 'button_danger',
    btnWhite && 'button_white',
    btnTransparent && 'button_transparent',
    className
  )

  return (
    <>
      <button className={styles} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  btnDanger: PropTypes.bool,
  btnWhite: PropTypes.bool,
  btnTransparent: PropTypes.bool
};

export default Button;
