import './App.css';
import HomePage from "../src/pages/HomePage/HomePage.js"
import {Switch, Route, Redirect} from "react-router-dom"
import {connect} from "react-redux"
import ShopPage from "./pages/ShopPage/ShopPage"
import Header from "../src/components/Header/Header"
import SignInAndOut from './pages/SignInAndOut/SignInAndOut';
import {auth, createUserProfileDocument } from "./firebase/firebaseUtils"
import { setCurrentUser} from "./redux/User/UserAction"

import React, { Component } from 'react'

export class App extends Component {

  unsubscribeFromAuth = null

  componentDidMount(){
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged (async userAuth => {
      if(userAuth){
       const userRef = await createUserProfileDocument(userAuth)

       userRef.onSnapshot(snapShot => {
         setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
       })
        // console.log(this.state)
      })
      }
      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  
  render() {
    return (
      <div>
        <Header/>
        <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route exact path="/signin" render ={()=> this.props.currentUser? (<Redirect to="/"/>):(<SignInAndOut/>)}/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = ({user}) =>({
  currentUser: user.currentUser
})

const mapDispatchToProps = (dispatch) =>({
setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);
