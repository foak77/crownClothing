import React, { Component } from 'react'
import "./SignIn.scss"
import FormInput from "../../components/FormInput/FormInput"
import CustomBtn from "../../components/CustomBtn/CustomBtn"
import {auth, signInWithGoogle} from "../../firebase/firebaseUtils"

export class SignIn extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:"",
             password:""
        }
    }
    
    handleSubmit = async event =>{
        event.preventDefault()
        const {email, password} = this.state
        try{
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({
                email:"",
                password:""
            })
        } catch (error) {
            console.log(error)
        }
    }

    handleChange = event => {
        const {value, name} = event.target
        this.setState({[name]: value})
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I Already have an Account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                    name="email"
                    type="email"
                    value={this.state.email}
                    handleChange={this.handleChange}
                    label="email"
                    required
                    />
                    <FormInput
                    name="password"
                    type="password"
                    value={this.state.password}
                    handleChange={this.handleChange}
                    label="password"
                    required />
                    <div className="buttons">
                    <CustomBtn type="submit">Sign In</CustomBtn>
                    <CustomBtn onClick ={signInWithGoogle} isGoogleSignIn type="button">{' '}Sign In with Google{' '}</CustomBtn>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn
