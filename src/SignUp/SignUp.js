import React from 'react'
import { Link } from 'react-router-dom'

class SignUp extends React.Component {
    render() {
        return (
            <section className="main sign-up">
                <h1>Create an Account</h1>
                <form className="sign-up-form">
                    <fieldset>
                        <label for="email">Email</label>
                        <br />
                        <input placeholder="your.email@you.com" type="Email" name="email" id="email" required />
                        <br />
                        <br />
                        <label for="password">Password</label>
                        <br />
                        <input placeholder="1234passw0rd" type="password" name="password" id="password" required />
                    </fieldset>
                    <button className="account-portal-button">Sign Up</button>
                </form>
                <h4>Already have an account? <Link to="/sign-in">Sign In</Link></h4>
            </section>
        )
    }
}

export default SignUp;