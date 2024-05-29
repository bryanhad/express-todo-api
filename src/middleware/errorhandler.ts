import { ErrorRequestHandler } from 'express'
import { ZodError } from 'zod'

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    if (err instanceof ZodError) {
        return res.status(400).json({ message: err.formErrors.fieldErrors })
    }
    res.status(500).json({
        message: 'Internal Server Error',
    })
}

export default errorHandler
