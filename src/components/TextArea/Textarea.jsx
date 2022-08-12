import { Component } from 'react';
import css from './Textarea.module.css';

export class Textarea extends Component {
  render() {
    return (
      <>
        <label className={css.label} htmlFor={this.props.id}>
          {this.props.children}
        </label>
        <textarea
          className={css.textarea}
          id={this.props.id}
          rows={this.props.rows}
          name={this.props.id}
          placeholder={this.props.placeholder}
          required={this.props.required}
        />
      </>
    );
  }
}
