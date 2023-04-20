import { Fragment, useState } from 'react'
import { Row, Text } from 'components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Form } from 'components/Form'

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }
  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <Fragment>
      <Row justifyContent='space-between' justifyItems='center' py='3rem' px='4.5rem'>
        <Text variant='big' fontWeight='bold'>
          todo
        </Text>
        <FontAwesomeIcon icon={faPlus} bounce size='2xl' onClick={handleOpenModal} />
        <Form.CreateTodoForm open={isModalOpen} onClose={handleCloseModal} />
      </Row>
    </Fragment>
  )
}
export default Header
