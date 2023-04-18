import { Fragment } from 'react'
import { z } from 'zod'

import { Column, Row, Text } from 'components'
import { createTodoSchema } from 'utils/schemas'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'

type Todo = z.infer<typeof createTodoSchema>
const TodoTask = ({ title, description }: Todo) => {
  return (
    <Fragment>
      <Column backgroundColor='#E0FFFF	' p='1.5rem' maxWidth='450px' borderRadius='0.5rem'>
        <Row justifyContent='space-between'>
          <Text variant='medium'>{title}</Text>
          <FontAwesomeIcon icon={faEllipsis} />
        </Row>
        <Text variant='regular' my='16px'>
          {description}
        </Text>
        <Row justifyContent='space-between'>
          <Text variant='small'>tags</Text>
          <Text variant='small'>Done</Text>
        </Row>
      </Column>
    </Fragment>
  )
}
export default TodoTask
