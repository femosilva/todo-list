/* eslint-disable prettier/prettier */
import { useContext } from 'react'
import { TodoContext } from 'context/TodoContext'

export const useTodo = () => {
    const todo = useContext(TodoContext)
    return todo
}
