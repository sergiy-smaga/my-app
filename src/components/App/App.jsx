import { Component } from 'react';
import { ContactForm } from '../Form/Form';
import css from './App.module.css';

export class App extends Component {
  handleFormData = data => {
    console.log(data);
  };

  render() {
    return (
      <div className={css.app}>
        <h1 className={css.heading}>Создание анкеты</h1>
        <ContactForm onSubmit={this.handleFormData} />
      </div>
    );
  }
}
