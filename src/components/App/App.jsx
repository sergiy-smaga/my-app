import { Component } from 'react';
import { ContactForm } from '../Form/Form';
import { Sheet } from '../Sheet/Sheet';
import { Title } from '../Title/Title';
import css from './App.module.css';

export class App extends Component {
  state = {
    isSubmitted: false,
    formData: {},
  };

  handleFormData = data => {
    this.setState({ isSubmitted: true, formData: data });
  };

  render() {
    return (
      <div className={css.app}>
        {this.state.isSubmitted ? (
          <Sheet {...this.state.formData} />
        ) : (
          <>
            <Title className={css.heading} text="Создание анкеты" />
            <ContactForm onSubmit={this.handleFormData} />
          </>
        )}
      </div>
    );
  }
}
