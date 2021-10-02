import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
/* import statisticalsData from './statistical-data.json'; */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root'),
);

/* const statisticalData = statisticalsData[0]; */

/* <Statistics title="Upload stats" stats={statisticalData} />;
<Statistics stats={statisticalData} />; */

/* ReactDOM.render(
  <Statistics title="Upload stats" stats={statisticalData} />,
  document.querySelector('#root'),
); */
