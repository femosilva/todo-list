import { Fragment } from 'react'
import { Column, Row, Text } from 'components'

const TodoTask = () => {
  return (
    <Fragment>
      <Column backgroundColor='#E0FFFF	' p='1.5rem' maxWidth='450px' borderRadius='0.5rem'>
        <Row justifyContent='space-between'>
          <Text variant='medium'>Nome da tarefa</Text>
          <Text variant='medium'>...</Text>
        </Row>
        <Text variant='regular' my='16px'>
          Lorem ipsum is placeholder text commonly used in the graphic,print, and publishing industries for previewing
          layouts and visual mockups.
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
