import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ThemeContext from './app/theme-context';
import Homepage from './app/Homepage/Homepage';

ReactDOM.render(
  <ThemeContext.Provider value="light">
    <Homepage />
  </ThemeContext.Provider>,
  document.getElementById('root')
);
