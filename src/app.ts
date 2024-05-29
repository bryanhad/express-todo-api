import express from 'express'
import errorHandler from './middleware/errorhandler'
import { userRoutes } from './routes/user.routes'
import { todoRoutes } from './routes/todo.routes'

const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello from route of Express-ts-todo-API!',
    })
})

app.use('/users', userRoutes)
app.use('/todos', todoRoutes)

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})
