import './App.css';
import HomePage from "../src/pages/HomePage/HomePage.js"
import {Switch, Route} from "react-router-dom"
import ShopPage from "./pages/ShopPage/ShopPage"
import Header from "../src/components/Header/Header"
import SignInAndOut from './pages/SignInAndOut/SignInAndOut';
import {auth, createUserProfileDocument } from "./firebase/firebaseUtils"

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged (async userAuth => {
      if(userAuth){
       const userRef = await createUserProfileDocument(userAuth)
       userRef.onSnapshot(snapShot => {
         this.setState({
           currentUser:{
            id: snapShot.id,
            ...snapShot.data()
           }
       })
        console.log(this.state)
      })
      }
      this.setState({currentUser: userAuth})
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
