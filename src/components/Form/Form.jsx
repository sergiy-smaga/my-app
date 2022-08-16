import { Component } from 'react';
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

export class ContactForm extends Component {
  state = initialState;

  handleNumber = () => {
    // нужно что-то сделать с преобразованием строки
    return this.state.number;
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    for (const field in this.state) {
      const element = this.state[field];
      if (element.trim() === '') {
        alert(`Поле ${field} пустое. Заполните пожалуйста`);
        // я не смог придумать, чтоб под каждым полем было такое сообщение ((
      }
    }
    this.props.onSubmit(this.state);
    e.target.reset();
  };

  onClick = () => {
    this.setState({ ...initialState });
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <Input
          onChange={this.handleChange}
          value={this.state.name}
          label="Имя"
          id="name"
          type="text"
          placeholder="Введите имя"
          pattern="^[A-ZА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя должно начинаться с большой буквы"
          required
        />

        <Input
          onChange={this.handleChange}
          value={this.state.surname}
          label="Фамилия"
          id="surname"
          type="text"
          placeholder="Введите фамилию"
          pattern="^[A-ZА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Фамилия должна начинаться с большой буквы"
          required
        />

        <Input
          onChange={this.handleChange}
          value={this.state.date}
          label="Дата рождения"
          id="date"
          type="date"
          required
        />

        <Input
          onChange={this.handleChange}
          value={this.handleNumber()}
          label="Телефон"
          id="number"
          type="tel"
          placeholder="0-0000-00-00"
          pattern="[0-9]{1}-[0-9]{4}-[0-9]{2}-[0-9]{2}"
          title="Номер должен содержать только цифры в указанном формате"
          maxlength="12"
          required
        />

        <Input
          onChange={this.handleChange}
          value={this.state.website}
          label="Сайт"
          id="website"
          type="url"
          placeholder="https://your-web-site"
          pattern="https://.*"
          title="Адрес должен начинаться с https://"
          required
        />

        <Textarea
          onChange={this.handleChange}
          value={this.state.selfInfo}
          label="О себе"
          id="selfInfo"
          rows="7"
          placeholder="Опишите свои достижения и итересы"
          maxlength="600"
          required
        />

        <Textarea
          onChange={this.handleChange}
          value={this.state.stack}
          label="Стек технологий"
          id="stack"
          rows="7"
          placeholder="Перечислите технологии, с которыми вы работали"
          maxlength="600"
          required
        />

        <Textarea
          onChange={this.handleChange}
          value={this.state.project}
          label="Описание последнего проекта"
          id="project"
          rows="7"
          placeholder="Опишите коротко свой последний проект и Вашу роль в нем"
          maxlength="600"
          required
        />

        <Button type="button" onClick={this.onClick}>
          Отмена
        </Button>

        <Button type="submit">Сохранить</Button>
      </form>
    );
  }
}
