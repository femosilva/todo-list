import { z } from 'zod'
import { createTodoSchema } from 'utils/schemas'

export type Todo = z.infer<typeof createTodoSchema>
