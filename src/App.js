import React from 'react';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header>
        <h1>Welcome {props.name} </h1>
      </header>
    </div>
  );
}

export default App;
