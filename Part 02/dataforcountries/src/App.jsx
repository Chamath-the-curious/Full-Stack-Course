import Search from './components/Search'
import { useEffect, useState } from 'react'
import CountryService from './services/countries'
import CountryList from './components/CountryList'

const App = () => {
    const [countries, setCountires] = useState([])
    const [newFilter, setNewFilter] = useState('')
    const [filteredCountries, setFilteredCountries] = useState([])

    useEffect(() => {
        CountryService
            .getAll()
            .then(returnedData => {
                setCountires(returnedData)
            })
    }, [])

    useEffect(() => {
        setFilteredCountries(getMatchingCountries)
    }, [newFilter])

    const getMatchingCountries = () => {
        return countries.filter(country => 
            country.name.common.toLowerCase().includes(newFilter.toLowerCase()))
    }

    const handleFilterChange = (event) => {
        const value = event.target.value
        setNewFilter(value)
    }

    return (
        <div>
            <Search newFilter={newFilter} handleFilterChange={handleFilterChange} /> 
            <CountryList countries={filteredCountries} />      
        </div>
    )
}

export default App
