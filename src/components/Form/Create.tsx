import { useForm, FormProvider } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Column, Modal, Row } from 'components'
import { Form } from 'components/Form'
import { useTodos } from 'context/TodoContext'
import { createTodoSchema } from 'utils/schemas'

type CreateTodoData = z.infer<typeof createTodoSchema>
interface CreateTodoFormProps {
  open: boolean
  onClose: () => void
}
const CreateTodoForm = ({ open, onClose }: CreateTodoFormProps) => {
  const { add } = useTodos()
  const createTodoForm = useForm<CreateTodoData>({
    resolver: zodResolver(createTodoSchema)
  })
  const { handleSubmit } = createTodoForm
  const createTodo = (newTodo: CreateTodoData) => {
    const storedTodosData = localStorage.getItem('todos')
    const todos = storedTodosData ? JSON.parse(storedTodosData) : []
    add(newTodo)
    localStorage.setItem('todos', JSON.stringify([...todos, newTodo]))
    onClose()
  }
  return (
    <Modal isOpen={open} onClose={onClose}>
      <FormProvider {...createTodoForm}>
        <form onSubmit={handleSubmit(createTodo)}>
          <Column py='1rem' px='2rem'>
            <Row justifyContent='space-between'>
              <button className='font-semibold' onClick={onClose}>
                Cancelar
              </button>
              <button className='bg-black p-2 rounded text-white font-semibold' type='submit'>
                Adicionar
              </button>
            </Row>
            <Form.Field>
              <Form.Label htmlFor='title'>Titulo</Form.Label>
              <Form.Input type='text' name='title' placeholder='adicione um titulo' />
            </Form.Field>
            <Form.Field>
              <Form.Label htmlFor='description'>Descrição</Form.Label>
              <Form.Input type='text' name='description' placeholder='adicione um descricao' />
            </Form.Field>
          </Column>
        </form>
      </FormProvider>
    </Modal>
  )
}
export default CreateTodoForm
