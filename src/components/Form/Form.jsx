import { useState } from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Textarea } from '../TextArea/Textarea';
import css from './Form.module.css';

const initialState = {
  name: '',
  surname: '',
  date: '',
  number: '',
  website: '',
  selfInfo: '',
  stack: '',
  project: '',
};

const MAX_LENGTH = 600;

export const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState(initialState);

  const handleNumber = e => {
    let arr = e.target.value;
    // let result = '';
    // for (let i = 0; i < arr.length; i += 1) {
    //   if (i === 1 || i === 5 || i === 7) {
    //     result += '-';
    //   }
    //   result += arr[i];
    // }
    setFormData(prevData => ({ ...prevData, number: arr }));
  };

  const handleChange = (e, length) => {
    const { name, value } = e.target;
    if (length > MAX_LENGTH) {
      setError(prevData => ({
        ...prevData,
        [name]: 'Превышен лимит символов в поле',
      }));
    } else {
      setError(prevData => ({
        ...prevData,
        [name]: '',
      }));
    }
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    for (const field in formData) {
      const element = formData[field];
      if (element.trim() === '') {
        setError(prevData => ({
          ...prevData,
          [field]: 'Поле пустое. Заполните пожалуйста',
        }));
      } else {
        setError(prevData => ({
          ...prevData,
          [field]: '',
        }));
      }
    }
    if (Object.values(error).every(value => !value)) {
      onSubmit(formData);
      e.target.reset();
    }
  };

  const formReset = () => {
    setFormData(initialState);
    setError(initialState);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <Input
        onChange={handleChange}
        value={formData.name}
        label="Имя"
        id="name"
        type="text"
        placeholder="Введите имя"
        pattern="^[A-ZА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя должно начинаться с большой буквы"
        error={error.name}
        // required
      />

      <Input
        onChange={handleChange}
        value={formData.surname}
        label="Фамилия"
        id="surname"
        type="text"
        placeholder="Введите фамилию"
        pattern="^[A-ZА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Фамилия должна начинаться с большой буквы"
        error={error.surname}
        // required
      />

      <Input
        onChange={handleChange}
        value={formData.date}
        label="Дата рождения"
        id="date"
        type="date"
        error={error.date}
        // required
      />

      <Input
        onChange={handleNumber}
        value={formData.number}
        label="Телефон"
        id="number"
        type="tel"
        placeholder="0-0000-00-00"
        pattern="[0-9]{1}-[0-9]{4}-[0-9]{2}-[0-9]{2}"
        title="Номер должен содержать только цифры в формате X-XXXX-XX-XX"
        maxlength="12"
        error={error.number}
        // required
      />

      <Input
        onChange={handleChange}
        value={formData.website}
        label="Сайт"
        id="website"
        type="url"
        placeholder="https://your-web-site"
        pattern="https://.*"
        title="Адрес должен начинаться с https://"
        error={error.website}
        // required
      />

      <Textarea
        onChange={handleChange}
        value={formData.selfInfo}
        label="О себе"
        id="selfInfo"
        rows="7"
        placeholder="Опишите свои достижения и итересы"
        maxlength={`${MAX_LENGTH}`}
        // required
        error={error.selfInfo}
      />

      <Textarea
        onChange={handleChange}
        value={formData.stack}
        label="Стек технологий"
        id="stack"
        rows="7"
        placeholder="Перечислите технологии, с которыми вы работали"
        maxlength={`${MAX_LENGTH}`}
        // required
        error={error.stack}
      />

      <Textarea
        onChange={handleChange}
        value={formData.project}
        label="Описание последнего проекта"
        id="project"
        rows="7"
        placeholder="Опишите коротко свой последний проект и Вашу роль в нем"
        maxlength={`${MAX_LENGTH}`}
        // required
        error={error.project}
      />

      <Button type="button" onClick={formReset}>
        Отмена
      </Button>

      <Button type="submit">Сохранить</Button>
    </form>
  );
};
