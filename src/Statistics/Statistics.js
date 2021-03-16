import React from 'react'
import StateStats from './../StateStats/StateStats';
import CountryStats from './../CountryStats/CountryStats'

class Statistics extends React.Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    render() {
        return (
            <section className="main stats" id="stats">
                <h1>Statistics</h1>
                <div className="stats-all-container">
                    <label>Global</label>
                    <CountryStats />
                    <StateStats />
                </div>
                <div>
                    <p>Confirmed Cases: Statistics Not Available</p>
                    <p>Recovered: Statistics Not Available</p>
                </div>
            </section>
        )
    }
}

export default Statistics;