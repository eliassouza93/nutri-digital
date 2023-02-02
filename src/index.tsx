import React from 'react';
import ReactDOM from 'react-dom/client';
import PaginaPrincipal from './components';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PaginaPrincipal />
  </React.StrictMode>
);
