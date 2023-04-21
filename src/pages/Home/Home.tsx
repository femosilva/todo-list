import { Fragment } from 'react'
import { Column, Row, TodoTask } from 'components'
import { useTodos } from 'context/TodoContext'
import { Todo } from 'shared/types/TodoType'

const Home = () => {
  const { todos } = useTodos()

  const groupedTodos = todos?.reduce((acc: Todo[][], todo, index) => {
    const groupIndex = Math.floor(index / 5)
    if (!acc[groupIndex]) {
      acc[groupIndex] = []
    }
    acc[groupIndex].push(todo)
    return acc
  }, [])
  return (
    <Fragment>
      <Row px='4.5rem' justifyContent='space-around'>
        {groupedTodos?.map((group, groupIndex) => (
          <Column width='320px' key={groupIndex}>
            {group.map(todo => (
              <TodoTask key={todo.id} id={todo.id} title={todo.title} description={todo.description} />
            ))}
          </Column>
        ))}
      </Row>
    </Fragment>
  )
}

export default Home
