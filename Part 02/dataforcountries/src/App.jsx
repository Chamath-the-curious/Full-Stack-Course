import Search from './components/Search'
import { useEffect, useState } from 'react'
import CountryService from './services/countries'
import CountryList from './components/CountryList'

const App = () => {
    const [countries, setCountires] = useState([])
    const [newFilter, setNewFilter] = useState('')

    useEffect(() => {
        CountryService
            .getAll()
            .then(returnedData => {
                setCountires(returnedData)
            })
    }, [])

    const getMatchingCountries = () => {
        return countries.filter(country => 
            country.name.common.toLowerCase().includes(newFilter.toLowerCase()))
    }

    const handleFilterChange = (event) => {
        const value = event.target.value
        setNewFilter(value)
    }

    const filteredCountries = newFilter === ''
        ? []
        : getMatchingCountries()

    return (
        <div>
            <Search newFilter={newFilter} handleFilterChange={handleFilterChange} /> 
            <CountryList countries={filteredCountries} />      
        </div>
    )
}

export default App
