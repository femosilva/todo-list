import { Fragment } from 'react'
import { Column, TodoTask } from 'components'
import { useTodo } from 'hooks/useTodo'

const Home = () => {
  const { todos } = useTodo()
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
