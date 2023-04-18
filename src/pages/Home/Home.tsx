import { Fragment, useEffect } from 'react'
import { Column, TodoTask } from 'components'
import { useTodo } from 'hooks/useTodo'

const Home = () => {
  const { todos, setTodos } = useTodo()
  useEffect(() => {
    const storedTodosData = localStorage.getItem('todos')
    if (storedTodosData !== null) {
      setTodos([JSON.parse(storedTodosData)])
    }
  }, [])
  return (
    <Fragment>
      <Column>
        {todos?.map((todo, index) => (
          <Fragment key={index}>
            <TodoTask title={todo.title} description={todo.description} />
          </Fragment>
        ))}
      </Column>
    </Fragment>
  )
}

export default Home
