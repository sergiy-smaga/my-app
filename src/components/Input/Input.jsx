import css from './Input.module.css';

export const Input = ({
  id,
  label,
  onChange,
  type,
  placeholder,
  required,
  pattern,
  title,
  value,
  maxlength,
  error,
}) => {
  return (
    <>
      <label className={css.label} htmlFor={id}>
        {label}
      </label>
      <input
        onChange={onChange}
        className={css.input}
        id={id}
        type={type}
        name={id}
        placeholder={placeholder}
        required={required}
        pattern={pattern}
        title={title}
        value={value}
        maxLength={maxlength}
      />
      {error !== '' && <p className={css.warning}>{error}</p>}
    </>
  );
};
