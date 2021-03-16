import React from 'react';
import NavBar from './../NavBar/NavBar';

class Statistics extends React.Component {
    render() {
        return (
            <section class="main stats" id="stats">
                <NavBar />
                <h1>Statistics</h1>
                <ul>
                    <li>
                        <label>Global</label>
                    </li>
                    <li>
                        <label for="countries">Country</label>
                        <select name="countries" id="countries">
                            <option value="afghanistan">Afghanistan</option>
                            <option value="albania">Albania</option>
                            <option value="algeria">Algeria</option>
                            <option>...</option>
                        </select>
                    </li>
                    <li>
                        <label for="states">State</label>
                        <select name="states" id="states">
                            <option value="alabama">Alabama</option>
                            <option value="alaska">Alaska</option>
                        </select>
                    </li>
                </ul>
            </section>
        )
    }
}

export default Statistics;