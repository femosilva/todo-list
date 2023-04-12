import { Fragment } from 'react'
import { Column, Text, TodoTask } from 'components'

const Home = () => {
  return (
    <Fragment>
      <Column>
        <Text>Lista de tarefas</Text>
        <TodoTask />
      </Column>
    </Fragment>
  )
}

export default Home
