import { createContext, useState } from 'react'
import { z } from 'zod'

import { createTodoSchema } from 'utils/schemas'

type Todo = z.infer<typeof createTodoSchema>
type TodoContextType = {
  todos: Todo[]
}

const TodoContext = createContext({} as TodoContextType)

const TodoProvider = ({ children }: any) => {
  const [todos, setTodos] = useState<Todo[]>([])
  const add = ({ title, description }: Todo) => {
    const todo = {
      title,
      description
    }
    setTodos(state => [...state, todo])
  }
  const remove = () => {
    return
  }
  const done = () => {
    return
  }
  const contextValue = {
    todos,
    add,
    remove,
    done
  }
  return <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
}

export { TodoContext, TodoProvider }
