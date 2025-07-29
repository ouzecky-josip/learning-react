import '../styles/Button.css';

const Button = ({ children, isDisabled, onButtonClick }) => {
  return (
    <button className='btn' disabled={isDisabled} onClick={onButtonClick}>
      {children}
    </button>
  );
};

export default Button;
