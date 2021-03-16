import React from 'react';

class NavBar extends React.Component {
    render() {
        return (
            <nav>
                <h3><a href="#home">Home</a></h3>
                <h3><a href="#stats">Statistics</a></h3>
                <h3><a href="#news">News</a></h3>
                <h3><a href="#sympbstprac">Symptoms & Best Practices</a></h3>
                <h3><a href="#resources">Resources</a></h3>
                <button>Login/Sign Up</button>
            </nav>
        )
    }
}

export default NavBar;