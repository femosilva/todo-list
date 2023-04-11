import { FC } from 'react'
import styled from 'styled-components'
import { space, layout, color, border, position, flexbox } from 'styled-system'

import { RowProps } from 'shared/interfaces/RowProps'

const Row: FC<RowProps> = styled.div<RowProps>({ display: 'flex' }, space, layout, color, border, position, flexbox)

export default Row
