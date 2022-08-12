import { Component } from 'react';
import css from './Button.module.css';

export class Button extends Component {
  render() {
    return (
      <button
        className={css.button}
        type={this.props.type}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );
  }
}
