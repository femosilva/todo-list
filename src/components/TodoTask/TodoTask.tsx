import { Fragment } from 'react'
import { z } from 'zod'

import { Column, Row, Text } from 'components'
import { createTodoSchema } from 'utils/schemas'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { useTodos } from 'context/TodoContext'

type Todo = z.infer<typeof createTodoSchema>

const TodoTask = ({ id, title, description, completed }: Todo) => {
  const { remove, done } = useTodos()

  return (
    <Fragment>
      <Column backgroundColor='#E0FFFF	' p='1.5rem' maxWidth='450px' borderRadius='0.5rem'>
        <Row justifyContent='space-between'>
          <Text variant='medium'>{title}</Text>
          <FontAwesomeIcon onClick={() => remove(id)} icon={faEllipsis} />
        </Row>
        <Text variant='regular' my='16px'>
          {description}
        </Text>
        <Row justifyContent='space-between'>
          <Text variant='small'>tags</Text>
          <button onClick={() => done(id)}>{completed ? 'Mark as incomplete' : 'Mark as complete'}</button>
        </Row>
      </Column>
    </Fragment>
  )
}
export default TodoTask
