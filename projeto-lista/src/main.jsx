import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Garage from './App';
import Zoologico from './Exemplos/exemplo1.jsx';
import Salada from './Exemplos/exemplo2.jsx';
import MyForm from './Formulário/forms.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<><><><Garage /><Zoologico /></><Salada /></><MyForm /></>
);



