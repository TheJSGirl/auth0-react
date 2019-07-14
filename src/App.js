import React from 'react';
import './App.css';
import Main from './components/main';
import Secret from './components/secret';
import NotFound from './components/NotFound';
import Callback from './components/Callback';

function App(props) {
  let mainComponent = "";
  switch(props.location) {
    case "": 
    mainComponent = <Main {...props}/>;
    break;
    case "callback":
        mainComponent = <Callback />;
        break;
    case "secret":
      mainComponent = props.auth.isAuthenticate() ? <Secret />: <NotFound />;
      break;

    default:
      mainComponent = <NotFound />;
  }
  return (
    <div className="App">
      {mainComponent}
    </div>
  );
}

export default App;
