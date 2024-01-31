import './styles.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const rootElement: HTMLElement | null = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root элемент не был найден в шаблоне!');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
);
