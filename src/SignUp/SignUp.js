import React from 'react';
import NavBar from './../NavBar/NavBar';

class SignUp extends React.Component {
    render() {
        return (
            <section class="main sign-up-form">
                <NavBar />
                <h1>Sign Up</h1>
                <form class="sign-up-form">
                    <fieldset>
                        <label for="email">Email</label>
                        <input placeholder="your.email@you.com" type="Email" name="email" id="email" required />
                        <></>
                        <label for="password">Password</label>
                        <input placeholder="1234passw0rd" type="password" name="password" id="password" required />
                    </fieldset>
                    <button id="signupbutton">Sign Up</button>
                </form>
                <h4>Already have an account? <a href="/login">Log In</a></h4>
            </section>
        )
    }
}

export default SignUp;