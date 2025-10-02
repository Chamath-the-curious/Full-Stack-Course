import { useEffect, useState } from 'react'
import PersonForm from './components/PersonForm'
import { nanoid } from 'nanoid'
import Persons from './components/Persons'
import Filter from './components/Filter'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const exists = persons.some(person => person.name.toLowerCase() === newName.toLowerCase())

  const addPerson = (event) => {
    event.preventDefault()

    if(exists) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const personObject = {
      name: newName,
      number: newNumber,
      id: nanoid()
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    const value = event.target.value
    setNewFilter(value.toLowerCase())
  }

  const visiblePersons = newFilter === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(newFilter))

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />

      <h2>Add a new</h2>

      <PersonForm addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>

      <Persons persons={visiblePersons} />
    </div>
  )
}

export default App
