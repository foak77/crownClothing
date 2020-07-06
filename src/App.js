import React from 'react';
import './App.css';
import HomePage from "../src/pages/HomePage/HomePage.js"
import {Switch, Route} from "react-router-dom"
import ShopPage from "./pages/ShopPage/ShopPage"
import Header from "../src/components/Header/Header"
import SignInAndOut from './pages/SignInAndOut/SignInAndOut';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/shop" component={ShopPage}/>
      <Route path="/signin" component={SignInAndOut}/>
      </Switch>
    </div>
  );
}

export default App;
