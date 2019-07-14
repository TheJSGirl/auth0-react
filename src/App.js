import React from 'react';
import './App.css';
import Main from './components/main';
import Secret from './components/secret';

function App(props) {
  let mainComponent = "";
  switch(this.props.location) {
    case "": 
    mainComponent = <Main />;
    case "secret":
      mainComponent = <Secret />;
    default:
      mainComponent = <Main />
  }
  return (
    <div className="App">
      <header>
        <h1>Welcome {props.name} </h1>
      </header>
      <Main />
    </div>
  );
}

export default App;
