import { Response, Router } from 'express'
import useSchema from '../middleware/use-schema'
import {
    CreateTodoRequestSchema,
    createTodoSchema,
} from '../validation/todo.validation'

const route = Router()

route.get(
    '/',
    useSchema(createTodoSchema),
    (req: CreateTodoRequestSchema, res: Response) => {
        const { title, desc } = req.body
        res.status(200).json({ data: { title, desc } })
    }
)

export { route as todoRoutes }
