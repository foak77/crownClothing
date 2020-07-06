import React from 'react'
import "./SignInAndOut.scss"
import SignIn from "../../components/SignIn/SignIn"
import SignUp from "../../components/SignUp/SignUp"

function SignInAndOut() {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default SignInAndOut
