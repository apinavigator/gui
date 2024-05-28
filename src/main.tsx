import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app.component.tsx';
import './stylesheets/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);