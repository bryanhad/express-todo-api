import { Request } from 'express'
import { z } from 'zod'

export const createUserSchema = z.object({
    query: z.object({
        name: z.string({ required_error: 'name field is required' }),
        password: z.string({ required_error: 'password field is required' }),
    }),
})

type CreateUserSchema = z.infer<typeof createUserSchema>

export type CreateUserRequestSchema = Request<
    any,
    any,
    any,
    CreateUserSchema['query']
>
