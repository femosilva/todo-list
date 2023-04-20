import React, { createContext, useContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { z } from 'zod'

import { createTodoSchema } from 'utils/schemas'

type Todo = Omit<z.infer<typeof createTodoSchema>, 'id'>
type TodoProviderProps = { children: React.ReactNode }

type TodoContextType = {
  todos: Todo[]
  add: (todo: Omit<Todo, 'id'>) => void
  edit: (id: string, newTitle: string, newDescription: string) => void
  remove: (id: string) => void
  done: (id: string) => void
}

const TodoContext = createContext({} as TodoContextType)

const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    const storedTodosData = localStorage.getItem('todos')
    if (storedTodosData && storedTodosData !== null) {
      setTodos(JSON.parse(storedTodosData))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const add = ({ title, description }: Omit<Todo, 'id'>) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      description: description,
      completed: false
    }
    setTodos(prevTodos => [...prevTodos, newTodo])
  }
  const edit = (id: string, newTitle: string, newDescription: string) => {
    setTodos(prevTodos =>
      prevTodos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            title: newTitle,
            description: newDescription
          }
        }
        return todo
      })
    )
  }
  const remove = (id: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }
  const done = (id: string) => {
    setTodos(prevTodos => prevTodos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }
  const contextValue = {
    todos,
    add,
    edit,
    remove,
    done
  }
  return <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
}
const useTodos = () => {
  const context = useContext(TodoContext)
  if (!context) {
    throw new Error('useTodos must be used within a TodoProvider')
  }
  return context
}
export { useTodos, TodoProvider }
