import { Modal, Column, Row } from 'components'
import { useForm, FormProvider } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from 'components/Form'
import { useTodos } from 'context/TodoContext'
import { createTodoSchema } from 'utils/schemas'

type Todo = Omit<z.infer<typeof createTodoSchema>, 'id'>
interface EditTodoFormProps {
  id: string
  title: string
  description: string
  onClose: () => void
}
const EditTodoForm = ({ id, title, description, onClose }: EditTodoFormProps) => {
  const methods = useForm({
    resolver: zodResolver(createTodoSchema),
    defaultValues: { title, description }
  })
  const { handleSubmit } = methods
  const { edit } = useTodos()

  const onSubmit = (data: Todo) => {
    edit(id, data.title, data.description)
    onClose()
  }

  return (
    <Modal isOpen={true} onClose={onClose}>
      <Column p='1.5rem' borderRadius='0.5rem'>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Form.Field>
              <Form.Label htmlFor='title'>Titulo</Form.Label>
              <Form.Input type='text' name='title' placeholder='adicione um titulo' />
            </Form.Field>
            <Form.Field>
              <Form.Label htmlFor='description'>Descrição</Form.Label>
              <Form.Input type='text' name='description' placeholder='adicione um descricao' />
            </Form.Field>
            <Row justifyContent='space-between'>
              <button className='font-semibold' onClick={onClose}>
                Cancelar
              </button>
              <button className='bg-black p-2 rounded text-white font-semibold'>Salvar alterações</button>
            </Row>
          </form>
        </FormProvider>
      </Column>
    </Modal>
  )
}
export default EditTodoForm
