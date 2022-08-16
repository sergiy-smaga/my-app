import { Component } from 'react';
import css from './Title.module.css';

export class Title extends Component {
  render() {
    return <h1 className={css.heading}>{this.props.text}</h1>;
  }
}
