import { Modal, Column, Text } from 'components'
import { useForm, FormProvider } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from 'components/Form'
import { useTodos } from 'context/TodoContext'
import { createTodoSchema } from 'utils/schemas'

type Todo = Omit<z.infer<typeof createTodoSchema>, 'id'>
interface EditTodoFormProps {
  id: number
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
      <Column p='1.5rem' maxWidth='450px' borderRadius='0.5rem'>
        <Text variant='medium'>Edit Todo</Text>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Form.Input name='title' />
            <Form.Input name='description' />
            <button>Save Changes</button>
          </form>
        </FormProvider>
      </Column>
    </Modal>
  )
}
export default EditTodoForm
