import { Component } from 'react';
import css from './Sheet.module.css';

export class Sheet extends Component {
  render() {
    const { name, surname, date, number, website, selfInfo, stack, project } =
      this.props;

    return (
      <>
        <h1 className={css.heading}>
          {name} {surname}
        </h1>
        <p className={css.text}>Дата рождения - {date}</p>
        <p className={css.text}>Номер телефона - {number}</p>
        <p className={css.text}>Веб-сайт - {website}</p>
        <p className={css.text}>Коротко о себе - {selfInfo}</p>
        <p className={css.text}>Стек технологий - {stack}</p>
        <p className={css.text}>Описание последнего проекта - {project}</p>
      </>
    );
  }
}
