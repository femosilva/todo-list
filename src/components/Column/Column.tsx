import Row from 'components/Row'
import { RowProps } from 'shared/interfaces/RowProps'

export type ColumnProps = RowProps

const Column = (props: ColumnProps) => {
  return (
    <Row flexDirection='column' {...props}>
      {props.children}
    </Row>
  )
}

export default Column
