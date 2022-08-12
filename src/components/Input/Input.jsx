import { Component } from 'react';
import css from './Input.module.css';

export class Input extends Component {
  render() {
    return (
      <>
        <label className={css.label} htmlFor={this.props.id}>
          {this.props.children}
        </label>
        <input
          className={css.input}
          id={this.props.id}
          type={this.props.type}
          name={this.props.id}
          placeholder={this.props.placeholder}
          required={this.props.required}
        />
      </>
    );
  }
}
