/* eslint-disable prettier/prettier */
import { z } from 'zod'

export const createTodoSchema = z.object({
    title: z.string().nonempty({ message: 'o titulo é obrigatorio' }),
    description: z.string().nonempty({ message: 'a descrição é obrigatória' }),
    completed: z.boolean().optional()
})