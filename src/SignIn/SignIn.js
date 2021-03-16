import React from 'react'


class SignIn extends React.Component {

    // handleSignIn = (e) => {
    //     e.preventDefault();
    //     this.props.history.push("/");
    // }
    render() {
        return (
            <section className="main sign-in-form">
                <h1>Sign In</h1>
                <form className="sign-up-form">
                    <fieldset>
                        <label for="email">Email</label>
                        <></>
                        <input placeholder="your.email@you.com" type="Email" name="email" id="email" required />
                        <></>
                        <label for="password">Password</label>
                        <></>
                        <input placeholder="1234passw0rd" type="password" name="password" id="password" required />
                    </fieldset>
                    <button
                        className="account-portal-button"
                        onClick={() => this.handleSignIn()}
                    >
                        Sign In
                    </button>
                </form>
            </section>
        )
    }
}

export default SignIn;