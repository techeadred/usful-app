import React from 'react';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
    render() {
        return (
            <nav className='App-nav'>
                <h3 className='nav-item nav-anchor'><Link to="/">Usful</Link></h3>
                <div className="nav-non-anchor">
                <h3 className='nav-item '><Link to="/statistics">Statistics</Link></h3>
                <h3 className='nav-item '><Link to="/news">News</Link></h3>
                <h3 className='nav-item '><Link to="/symptoms">Symptoms</Link></h3>
                <h3 className='nav-item '><Link to="/best-practices">Best Practices</Link></h3>
                <h3 className='nav-item '><Link to="/resources">Resources</Link></h3>
                </div>
                <h3 className='nav-item nav-user-interaction'><Link to="/sign-in">Sign In</Link></h3>
                <h3 className='nav-item nav-user-interaction'><Link to="/sign-up">Sign Up</Link></h3>
            </nav>
        )
    }
}

export default NavBar;