import React from 'react';
import './App.css';
import HomePage from "../src/pages/HomePage/HomePage.js"
import {Switch, Route} from "react-router-dom"
import ShopPage from "./pages/ShopPage/ShopPage"
import Header from "../src/components/Header/Header"

function App() {
  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/shop" component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
