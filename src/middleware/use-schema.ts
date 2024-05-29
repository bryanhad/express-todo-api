import { RequestHandler } from 'express';
import {ZodSchema} from 'zod'

export default function useSchema(schema:ZodSchema):RequestHandler {
    return (req, res, next) => {
        try {
            schema.parse(req)
            next()
        } catch (err) {
            next(err)            
        }
    }
}