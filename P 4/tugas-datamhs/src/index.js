import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import MahasiswaAPI from './container/MahasiswaAPI'
import reportWebVitals from './reportWebVitals';

// Praktikum
// ReactDOM.render(<BlogPost />, document.getElementById('root'));

// Tugas
ReactDOM.render(<MahasiswaAPI />, document.getElementById('root'));
reportWebVitals();