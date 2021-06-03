import { prop, switchProp }       from 'styled-tools'

import { createAppearanceStyles } from './appearance'
import { createBaseStyles }       from './base'
import { createShapeStyles }      from './shape/shape.styles'

export const baseStyles = createBaseStyles()

export const whiteColorStyles = ({ theme }) =>
  createAppearanceStyles({
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.purple,
  })
export const purpleColorStyles = ({ theme }) =>
  createAppearanceStyles({
    backgroundColor: theme.colors.purple,
    borderColor: theme.colors.grey,
  })
export const redColorStyles = ({ theme }) =>
  createAppearanceStyles({
    backgroundColor: theme.colors.lightRed,
    borderColor: theme.colors.grey,
  })
export const greyColorStyles = ({ theme }) =>
  createAppearanceStyles({
    backgroundColor: theme.colors.lightGrey,
    borderColor: 'transparent',
  })

export const justifyContentStartStyles = createAppearanceStyles({ justifyContent: 'flex-start' })
export const justifyContentEndStyles = createAppearanceStyles({ justifyContent: 'flex-end' })

export const normaHeightStyles = createShapeStyles({ height: '50px' })
export const smallHeightStyles = createShapeStyles({ height: '30px' })

export const sizeStyles = switchProp(prop('height', 'normal'), () => ({
  small: smallHeightStyles,
  normal: normaHeightStyles,
}))

export const colorStyles = switchProp(prop('color', 'purple'), () => ({
  purple: purpleColorStyles,
  white: whiteColorStyles,
  red: redColorStyles,
  grey: greyColorStyles,
}))
export const overflowAutoStyles = createShapeStyles({ overflowValue: 'auto' })
export const overflowInheritStyles = createShapeStyles({ overflowValue: 'inherit' })

export const overflowStyles = switchProp(prop('overflowY', 'inherit'), () => ({
  inherit: overflowInheritStyles,
  auto: overflowAutoStyles,
}))

export const justifyContentStyles = switchProp(prop('justifyContent', 'center'), () => ({
  start: justifyContentStartStyles,
  end: justifyContentEndStyles,
}))