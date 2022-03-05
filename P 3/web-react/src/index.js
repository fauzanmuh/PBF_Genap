import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import LifeCycle from './LifeCycle';
import HelloComponent from './component/HelloComponent';
import reportWebVitals from './reportWebVitals';

class stateFullComponent extends React.Component {
  render() {
    return<p>stateFull Component</p>;
  }
}

ReactDOM.render(<HelloComponent />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
