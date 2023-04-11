import { ReactNode } from 'react'
import { SpaceProps, LayoutProps, ColorProps, BorderProps, PositionProps, FlexboxProps } from 'styled-system'

export interface RowProps extends SpaceProps, LayoutProps, ColorProps, BorderProps, PositionProps, FlexboxProps {
  children?: ReactNode
}
