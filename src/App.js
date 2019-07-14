import React from 'react';
import './App.css';
import Main from './components/main/main';

function App(props) {
  let mainComponent = "";
  switch(this.props.location) {
    case "": 
    mainComponent = <Main />;
     
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
