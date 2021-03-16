import React from 'react';
import { countryAll } from './../Store'

class CountryStats extends React.Component {
    render() {
        const cAll = countryAll()
        
        return (
            <>
                <label for="countries">Country</label>
                        <select name="countries" id="countries">
                            {cAll.map(country =>
                                <option key={cAll[country]} value={country.code}>{country.name}</option>)
                            }
                        </select>
                

            </>
        )
    }
}

export default CountryStats;