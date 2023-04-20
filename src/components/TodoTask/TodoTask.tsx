import { Fragment, useState } from 'react'
import { z } from 'zod'

import { Column, Row, Text } from 'components'
import { Form } from 'components/Form'
import { createTodoSchema } from 'utils/schemas'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { useTodos } from 'context/TodoContext'

type Todo = z.infer<typeof createTodoSchema>

const TodoTask = ({ id, title, description }: Todo) => {
  const { remove, done } = useTodos()
  const [isEditing, setIsEditing] = useState(false)

  return (
    <Fragment>
      <Column backgroundColor='#E0FFFF	' p='1.5rem' maxWidth='450px' borderRadius='0.5rem'>
        <Row justifyContent='space-between'>
          <Text variant='medium'>{title}</Text>
          <Row>
            <FontAwesomeIcon onClick={() => setIsEditing(true)} icon={faPenToSquare} cursor='pointer' />
            <FontAwesomeIcon onClick={() => remove(id)} icon={faTrash} cursor='pointer' />
          </Row>
        </Row>
        <Text variant='regular' my='16px'>
          {description}
        </Text>
        <Row justifyContent='flex-end'>
          <FontAwesomeIcon onClick={() => done(id)} icon={faCheck} cursor='pointer' />
        </Row>
      </Column>
      {isEditing && (
        <Form.EditTodoForm id={id} title={title} description={description} onClose={() => setIsEditing(false)} />
      )}
    </Fragment>
  )
}

export default TodoTask
