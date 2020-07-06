import './App.css';
import HomePage from "../src/pages/HomePage/HomePage.js"
import {Switch, Route} from "react-router-dom"
import ShopPage from "./pages/ShopPage/ShopPage"
import Header from "../src/components/Header/Header"
import SignInAndOut from './pages/SignInAndOut/SignInAndOut';
import {auth} from "./firebase/firebaseUtils"

import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged (user => {
      this.setState({currentUser: user})
      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route path="/signin" component={SignInAndOut}/>
        </Switch>
      </div>
    )
  }
}

export default App;
