import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Firstpage from './pages/firstpage';
import reportWebVitals from './reportWebVitals';

const myFirstElement = (<div>
  <h1>Hello React!</h1>
  <h3>Hao, I'm here.</h3>
</div>);

function Car(props) {
  return <h3>I am a {props.color} Car!</h3>;
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Firstpage />
    <Car color="red"/>
    <div className='hello'>{myFirstElement}</div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
