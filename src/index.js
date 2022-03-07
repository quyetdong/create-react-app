import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Person from './Person';
import reportWebVitals from './reportWebVitals';

const mainApp = (
  <React.StrictMode>
    <div>
      <App />
      <Person name="Toan New" age="28.5"/>
      <Person name="Thanh New" age="32.5"/>
    </div>
  </React.StrictMode>
  );

ReactDOM.render(mainApp,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
