import css from './Button.module.css';

export const Button = ({ type, onClick, children }) => {
  return (
    <button className={css.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
