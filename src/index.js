import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App/App.jsx';
import './index.css';

const rootRef = document.getElementById('root');
const root = ReactDOM.createRoot(rootRef);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
