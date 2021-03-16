import React from 'react';
import NavBar from './../NavBar/NavBar';

class Resources extends React.Component {
    render() {
        return (
            <section class="main resources" id="resources">
                <NavBar />
                <h1>Resources</h1>
                <ul>
                    <li>CDC</li>
                    <li>European CDC</li>
                    <li>WHO</li>
                    <li>Self Assesment Exam</li>
                </ul>
            </section>
        )
    }
}

export default Resources;