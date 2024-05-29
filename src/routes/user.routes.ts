import { Response, Router } from 'express'
import useSchema from '../middleware/use-schema'
import {
    CreateUserRequestSchema,
    createUserSchema,
} from '../validation/user.validation'
import db from '../db'

const route = Router()

route.post(
    '/',
    useSchema(createUserSchema),
    async (req: CreateUserRequestSchema, res: Response) => {
        const { name, password } = req.query

        const user = await db.user.create({
            data: { name: name, password: password },
        })

        res.status(200).json({ message: 'created-user', data: user })
    }
)

export {route as userRoutes}
