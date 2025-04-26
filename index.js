const express = require('express')

const app = express()


app.get('/', (req, res) => {
    res.send(
        '<h1>Welcome to the Express.js API</h1>'
    )
}
)

app.get('/users', (req, res) => {
    res.json(
        [
            { id: 1, name: 'John Doe' },
            { id: 2, name: 'Jane Doe' },
            { id: 3, name: 'Jim Doe' }
        ]
    )
}
)


app.listen('3000', () => console.log('Server running on port ', '3000'))