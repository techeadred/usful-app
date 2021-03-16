import React from 'react';
import { symptomsAll } from '../Store';

class Symptoms extends React.Component {
    render() {
        const sympAll = symptomsAll()

        return (
            <section className="main symptoms" id="symptoms">
                <h1>Symptoms</h1>
                <div className="generated-list">
                    {sympAll.map(bp =>
                        <div key={bp.id}>
                            {bp.symptom}
                        </div>
                    )}
                </div>
            </section>
        )
    }
}

export default Symptoms;