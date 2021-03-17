import { border, boxShadow, color, flexbox, layout, position, space, system, display } from 'styled-system'

import styled                                                                 from '@emotion/styled'

interface Row {
  system?:({
           boxSizing: boolean,
           overflowX: boolean,
           overflowY: boolean,
         }),
  layout?: string,
  space?: string,
  color?: string,
  flexbox?: string,
  boxShadow?: string,
  boxSizing?: string,
  position?: string,
  border?: string,
  display?: string
}

export const Box = styled.div<Row>(
  system({
    boxSizing: true,
    overflowX: true,
    overflowY: true,
  }),
  layout,
  space,
  color,
  flexbox,
  boxShadow,
  position,
  border,
  display
)

Box.defaultProps = {
  display: 'flex',
  boxSizing: 'border-box',
}