import React from 'react';
import { bestPracticesAll } from './../Store'

class BestPractices extends React.Component {
    render() {
        const bestPractAll = bestPracticesAll()

        return (
            <section className="main best-practices" id="best-practices">
                <h1>Best Practices</h1>
                <div className="generated-list">
                    {bestPractAll.map(bp =>
                        <div key={bp.id}>
                            {bp.practice}
                        </div>
                    )}
                </div>
            </section>
        )
    }
}

export default BestPractices;