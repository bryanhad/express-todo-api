import { Request } from 'express'
import { z } from 'zod'

export const createTodoSchema = z.object({
    body: z.object(
        {
            title: z
                .string({ required_error: 'title field is required' })
                .min(4, `Todo's title must be at least 4 characters long`),
            desc: z
                .string()
                .min(4, 'Must be at least 4 characters long')
                .optional(),
        },
        { required_error: 'Request body is required' }
    ),
})

type CreateTodoSchema = z.infer<typeof createTodoSchema>

export type CreateTodoRequestSchema = Request<
    any,
    any,
    CreateTodoSchema['body']
>
