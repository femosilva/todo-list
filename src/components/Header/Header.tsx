import { Fragment, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Column, Modal, Row, Text } from 'components'
import { Form } from 'components/Form'
import { useTodos } from 'context/TodoContext'
import { createTodoSchema } from 'utils/schemas'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

type CreateTodoData = z.infer<typeof createTodoSchema>

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { add } = useTodos()

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }
  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const createTodoForm = useForm<CreateTodoData>({
    resolver: zodResolver(createTodoSchema)
  })
  const { handleSubmit } = createTodoForm
  const createTodo = (newTodo: CreateTodoData) => {
    const storedTodosData = localStorage.getItem('todos')
    const todos = storedTodosData ? JSON.parse(storedTodosData) : []
    add(newTodo)
    localStorage.setItem('todos', JSON.stringify([...todos, newTodo]))
    setIsModalOpen(false)
  }
  return (
    <Fragment>
      <Row justifyContent='space-between' justifyItems='center' py='3rem' px='4.5rem'>
        <Text variant='big' fontWeight='bold'>
          todo
        </Text>
        <FontAwesomeIcon icon={faPlus} bounce size='2xl' onClick={handleOpenModal} />
      </Row>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <FormProvider {...createTodoForm}>
          <form onSubmit={handleSubmit(createTodo)} className='flex flex-col gap-4 w-full max-w-xs'>
            <Column py='1rem' px='2rem'>
              <Row justifyContent='space-between'>
                <button onClick={handleCloseModal}>Cancelar</button>
                <button type='submit'>Adicionar</button>
              </Row>
              <Form.Field>
                <Form.Label htmlFor='title'>Titulo</Form.Label>
                <Form.Input type='text' name='title' />
              </Form.Field>
              <Form.Field>
                <Form.Label htmlFor='description'>Descrição</Form.Label>
                <Form.Input type='text' name='description' />
              </Form.Field>
              <Form.Field>TAGS</Form.Field>
            </Column>
          </form>
        </FormProvider>
      </Modal>
    </Fragment>
  )
}
export default Header
