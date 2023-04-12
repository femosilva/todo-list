import { Fragment } from 'react'
import { Column, TodoTask } from 'components'

const Home = () => {
  return (
    <Fragment>
      <Column>
        <TodoTask />
      </Column>
    </Fragment>
  )
}

export default Home
