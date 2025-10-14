import express, { request, response } from 'express'
import cors from 'cors'

const app = express()
app.use(cors())

let contacts = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.use(express.json())

app.get('/info', (request, response) => {
    const requestTime = new Date().toString()
    response.send(`<div>Phonebook has info for ${contacts.length} people</div><br>
        <div>${requestTime}</div>`)
})

app.get('/api/contacts', (request, response) => {
    response.json(contacts)
})

app.get('/api/contacts/:id', (request, response) => {
    const id = request.params.id
    const contact = contacts.find(contact => contact.id === id)

    if (contact) {
        response.json(contact)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/contacts/:id', (request, response) => {
    const id = request.params.id
    contacts = contacts.filter(contact => contact.id !== id)

    response.status(204).end()
})

const generateId = () => {
    return Math.floor(Math.random() * 100)
}

app.post('/api/contacts', (request, response) => {
    const body = request.body

    if (!body.name || !body.number) {
        return response.status(404).json({
            error: 'name or number missing'
        })
    }

    const contact = {
        id: generateId(),
        name: body.name,
        number: body.number
    }

    contacts = contacts.concat(contact)
    response.json(contact)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
