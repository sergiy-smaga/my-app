import { Component } from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Textarea } from '../TextArea/Textarea';
import css from './Form.module.css';

export class ContactForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.elements);
  };

  onClick = e => {
    console.log(e.target);
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <Input id="name" type="text" placeholder="Введите имя" required={true}>
          Имя
        </Input>

        <Input
          id="surname"
          type="text"
          placeholder="Введите фамилию"
          required={true}
        >
          Фамилия
        </Input>

        <Input id="date" type="date" required={true}>
          Дата рождения
        </Input>

        <Input
          id="number"
          type="tel"
          placeholder="+3805000000000"
          required={true}
        >
          Телефон
        </Input>

        <Input
          id="website"
          type="url"
          placeholder="https://your-web-site"
          required={false}
        >
          Сайт
        </Input>

        <Textarea
          id="selfInfo"
          rows="7"
          placeholder="Опишите свои достижения и итересы"
          required={true}
        >
          О себе
        </Textarea>

        <Textarea
          id="stack"
          rows="7"
          placeholder="Перечислите технологии, с которыми вы работали"
          required={false}
        >
          Стек технологий
        </Textarea>

        <Textarea
          id="project"
          rows="7"
          placeholder="Опишите коротко свой последний проект и Вашу роль в нем"
          required={false}
        >
          Описание последнего проекта
        </Textarea>

        <Button type="button" onClick={this.onClick}>
          Отмена
        </Button>
        <Button type="submit">Сохранить</Button>
      </form>
    );
  }
}
