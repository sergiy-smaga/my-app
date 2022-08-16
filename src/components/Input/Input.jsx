import { Component } from 'react';
import css from './Input.module.css';

export class Input extends Component {
  render() {
    return (
      <>
        <label className={css.label} htmlFor={this.props.id}>
          {this.props.label}
        </label>
        <input
          onChange={this.props.onChange}
          className={css.input}
          id={this.props.id}
          type={this.props.type}
          name={this.props.id}
          placeholder={this.props.placeholder}
          required={this.props.required}
          pattern={this.props.pattern}
          title={this.props.title}
          value={this.props.value}
          maxLength={this.props.maxlength}
        />
      </>
    );
  }
}
