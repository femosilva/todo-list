import { Column } from 'components'
import { HTMLAttributes } from 'react'

type FieldProps = HTMLAttributes<HTMLDivElement>

export function Field(props: FieldProps) {
  return <Column className='gap-1' {...props} />
}
