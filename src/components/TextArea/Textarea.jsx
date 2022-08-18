import { useState } from 'react';
import css from './Textarea.module.css';

export const Textarea = ({
  onChange,
  id,
  label,
  value,
  rows,
  placeholder,
  required,
  maxlength,
  error,
}) => {
  const [length, setLength] = useState(0);

  const handleChange = e => {
    setLength(e.target.value.length);
    onChange(e, length);
  };

  return (
    <>
      <label className={css.label} htmlFor={id}>
        {label}
      </label>
      <textarea
        onChange={handleChange}
        value={value}
        className={css.textarea}
        id={id}
        rows={rows}
        name={id}
        placeholder={placeholder}
        required={required}
      />
      {length <= maxlength && (
        <p className={css.counter}>
          Осталось {length}/{maxlength} символов
        </p>
      )}

      {/* {length > maxlength && (
        <p className={css.warning}>Превышен лимит символов в поле</p>
      )} */}
      {error !== '' && <p className={css.warning}>{error}</p>}
    </>
  );
};
