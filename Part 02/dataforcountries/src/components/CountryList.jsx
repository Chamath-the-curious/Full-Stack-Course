import { nanoid } from 'nanoid'
import Country from './Country'

const CountryList = (props) => {
    if (props.countries.length > 5) 
        return <div>Too many matches, specify another filter</div>

    if (props.countries.length === 1) 
        return <Country country={props.countries} />

    return (
        <div>
            {props.countries.map(country => 
                <div key={nanoid()}>{country.name.common}</div>
            )}
        </div>
    )
}

export default CountryList
