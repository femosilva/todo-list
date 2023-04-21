import { Column } from 'components'
import { HTMLAttributes } from 'react'

type FieldProps = HTMLAttributes<HTMLDivElement>

export const Field = (props: FieldProps) => {
  return <Column className='gap-1' {...props} />
}
