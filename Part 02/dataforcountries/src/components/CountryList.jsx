import Show from './Show'
import Country from './Country'
import { useState } from 'react'

const CountryList = (props) => {
    const [selectedCountry, setSelectedCountry] = useState(null)

    if (selectedCountry) {
        return <Country country={selectedCountry} />
    }

    if (props.countries.length > 5) 
        return <div>Too many matches, specify another filter</div>

    if (props.countries.length === 1) 
        return <Country country={props.countries} />

    return (
        <div>
            {props.countries.map(country => 
                <div key={country.cca3}>
                    {country.name.common} 
                    <Show country={country} onSelect={setSelectedCountry}/>
                </div>
            )}
        </div>
    )
}

export default CountryList
