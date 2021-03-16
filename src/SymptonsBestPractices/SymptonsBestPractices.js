import React from 'react';
import NavBar from './../NavBar/NavBar';

class SymptonsBestPractices extends React.Component {
    render() {
        return (
            <section class="main sympbstprac" id="sympbstprac">
                <NavBar />
                <h1>Symptoms &</h1>
                <h1>Best Practices</h1>
                <ul>
                    <li>Social Distance</li>
                    <li>Wear Mask when in public</li>
                    <li>Stay home when sick</li>
                </ul>
            </section>
        )
    }
}

export default SymptonsBestPractices;