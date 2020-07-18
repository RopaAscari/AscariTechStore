import './App.scss';
import React from 'react';
import history from './router/history'
import RouterApp from './router/PageRouter.js';
import Navigation from './components/navbar/togglenavbar.jsx'
import {GetCookieSession} from './cookies/cookies'

const sessionCore = React.createContext(GetCookieSession);
  //3const session = React.useContext("ggg");

class App extends React.Component {
  
render(){
  return (
      <div className="App"> 
        <sessionCore.Provider >
          <Navigation/>      
          <RouterApp history={history}/>
        </sessionCore.Provider>
      </div>
   );
 }
}

export default App;
