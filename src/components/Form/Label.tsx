import { LabelHTMLAttributes } from 'react'

export const Label = (props: LabelHTMLAttributes<HTMLLabelElement>) => {
  return <label className='mb-2 text-xl font-bold text-black' {...props} />
}
