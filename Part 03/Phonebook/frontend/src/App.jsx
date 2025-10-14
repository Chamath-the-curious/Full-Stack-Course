import { useEffect, useState } from 'react'
import PersonForm from './components/PersonForm'
import { nanoid } from 'nanoid'
import Persons from './components/Persons'
import Filter from './components/Filter'
import contactsService from './services/contacts'
import Notification from '../../../introdemo/src/components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(() => {
    contactsService
      .getAll()
      .then(initialContacts => {
        setPersons(initialContacts)
      })
  }, [])

  const exists = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())

  const resetMessage = () => {
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }

  const addPerson = (event) => {
    event.preventDefault()

    if(exists) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with the new one?`)) {
        const changedPerson = {...exists, number: newNumber}

        contactsService
          .update(exists.id, changedPerson)
          .then(returnedContact => {
            setPersons(persons.map(person => person.id === exists.id ? returnedContact : person))
            setMessage(`${exists.name} has been updated`)
            resetMessage()
          })
      } else {
          setNewName('')
          setNewNumber('')
          return
      }
    }

    const personObject = {
      name: newName,
      number: newNumber,
      id: nanoid()
    }
    contactsService
      .create(personObject)
      .then(returnedContact => {
        setPersons(persons.concat(returnedContact))
        setMessage(`Added ${personObject.name}`)
        resetMessage()
        setNewName('')
        setNewNumber('')
      })
  }

  const deletePerson = (id) => {
    if (window.confirm("Delete contact?")) {
      contactsService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
        })
        .catch(error => {
          alert(`Error deleting the person ${error}`)
        })
      }
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

      <Notification message={message} />

      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />

      <h2>Add a new</h2>

      <PersonForm addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>

      <Persons persons={visiblePersons} deletePerson={deletePerson}/>
    </div>
  )
}

export default App
