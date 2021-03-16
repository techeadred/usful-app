import React from 'react';
import { stateAll } from '../Store'

class StateStats extends React.Component {
    render() {
        const sAll = stateAll()
        
        return (
            <>
                <label for="states">State</label>
                        <select name="states" id="states">
                            {sAll.map(state =>
                                <option key={sAll[state]} value={state.code}>{state.name}</option>)
                            }
                        </select>
            </>
        )
    }
}

export default StateStats;