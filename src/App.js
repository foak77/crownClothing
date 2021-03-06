import './App.css';
import HomePage from "../src/pages/HomePage/HomePage.js"
import {Switch, Route, Redirect} from "react-router-dom"
import {connect} from "react-redux"
import ShopPage from "./pages/ShopPage/ShopPage"
import Header from "../src/components/Header/Header"
import SignInAndOut from './pages/SignInAndOut/SignInAndOut';
import {auth, createUserProfileDocument } from "./firebase/firebaseUtils"
import {setCurrentUser} from "./redux/User/UserAction"
import React, { Component } from 'react'
import {selectCurrentUser} from "./redux/User/UserSelector"
import {createStructuredSelector} from "reselect"
import Checkout from "../src/pages/Checkout/Checkout"


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
        <Route exact path="/checkout" component={Checkout}/>
        <Route exact path="/signin" render ={() => this.props.currentUser ? (<Redirect to="/"/>):(<SignInAndOut/>)}/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) =>({
setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);
