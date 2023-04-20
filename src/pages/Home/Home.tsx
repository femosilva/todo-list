import { Fragment } from 'react'
import { Column, TodoTask } from 'components'
import { useTodos } from 'context/TodoContext'

const Home = () => {
  const { todos } = useTodos()

  return (
    <Fragment>
      <Column>
        {todos?.map(todo => (
          <Fragment key={todo.id}>
            <TodoTask id={todo.id} title={todo.title} description={todo.description} />
          </Fragment>
        ))}
      </Column>
    </Fragment>
  )
}

export default Home
