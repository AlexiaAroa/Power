import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './estilos.css';

// Renderizar App en el DOM
// 2 params, 1 la app, 2 en donde quiero que se muestre (en el DOM)
ReactDOM.render(<App />, document.getElementById('root'))