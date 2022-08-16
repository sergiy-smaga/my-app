import { Component } from 'react';
import css from './Textarea.module.css';

export class Textarea extends Component {
  state = { length: 0 };

  handleChange = e => {
    this.setState({ length: e.target.value.length });
    this.props.onChange(e);
  };

  render() {
    return (
      <>
        <label className={css.label} htmlFor={this.props.id}>
          {this.props.label}
        </label>
        <textarea
          onChange={this.handleChange}
          value={this.props.value}
          className={css.textarea}
          id={this.props.id}
          rows={this.props.rows}
          name={this.props.id}
          placeholder={this.props.placeholder}
          required={this.props.required}
        />
        {this.state.length <= this.props.maxlength && (
          <p className={css.counter}>
            Осталось {this.state.length}/{this.props.maxlength} символов
          </p>
        )}

        {this.state.length > this.props.maxlength && (
          <p className={css.warning}>Превышен лимит символов в поле</p>
        )}
      </>
    );
  }
}
