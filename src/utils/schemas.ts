/* eslint-disable prettier/prettier */
import { z } from 'zod'

export const createTodoSchema = z.object({
    title: z.string().nonempty({ message: 'o titulo é obrigatorio' }),
    description: z.string().nonempty({ message: 'o titulo é obrigatorio' }),
    completed: z.boolean().optional()
}).nonstrict()