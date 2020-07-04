import React from 'react';
import './App.css';
import HomePage from "../src/pages/HomePage/HomePage.js"
import {Switch, Route} from "react-router-dom"
import HatsPage from './pages/HatsPage/HatsPage';

function App() {
  return (
    <div>
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/hats" component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
