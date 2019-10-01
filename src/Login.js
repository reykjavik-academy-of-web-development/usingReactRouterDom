import React from 'react';
import './App.css';

function Login(props) {
  return (
    <div className="App">
      <button onClick={props.login}>login</button>
      <button onClick={props.logout}>logout</button>
    </div>
  );
}

export default Login;
