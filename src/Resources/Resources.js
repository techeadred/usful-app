import React from 'react';
import { resourceAll } from '../Store';

class Resources extends React.Component {
    render() {
        const resAll = resourceAll()

        return (
            <section className="main resources" id="resources">
                <h1>Resources</h1>
                <div className="generated-list">
                    {resAll.map(ra =>
                        <div key={ra.id}>
                            {ra.name}
                        </div>
                    )}
                </div>
            </section>
        )
    }
}

export default Resources;