const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(express.static('dist'))
app.use(express.json())
morgan.token('body', req => {
    return req.method === 'POST' ? JSON.stringify(req.body) : ''
})
app.use(morgan(':method :url :status :res[content-length] :response-time ms :body'))

let persons = [
    { 
        id: "1",
        name: "Arto Hellas", 
        number: "040-123456"
    },
    { 
        id: "2",
        name: "Ada Lovelace", 
        number: "39-44-5323523"
    },
    { 
        id: "3",
        name: "Dan Abramov", 
        number: "12-43-234345"
    },
    { 
        id: "4",
        name: "Mary Poppendieck", 
        number: "39-23-6423122"
    }
]

const generateId = () => {
    const max = 10000
    const min = 5000
    return String(Math.floor(Math.random() * (max - min) + min))
}

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/info', (request,response) => {
    response.send(`
        <p>Phonebook has info for ${persons.length} people</p>
        <p>${new Date()}</p>
    `)
})

app.get('/api/persons/:id', (request, response) => {
    const id = request.params.id
    const person = persons.find(p => p.id === id)

    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id
    persons = persons.filter(p => p.id !== id)

    response.status(204).end()
})

app.post('/api/persons', (request, response) => {
    const body = request.body
    const personExists = persons.some(p => p.name === body.name)
    const errMsg = !body.name ? 'name missing'
        : personExists ? 'name must be unique'
        : !body.number ? 'number is missing'
        : ''

    if (errMsg) {
        return response.status(400).json({
            error: errMsg
        })
    }

    const person = {
        name: body.name,
        number: body.number || '',
        id: generateId()
    }
    persons = persons.concat(person)
    return response.json(person)
})

const PORT = process.env.port || 3001
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})