import { prop, switchProp }       from 'styled-tools'

import { createAppearanceStyles } from './appearance'
import { createBaseStyles }       from './base'
import { createBaseShape }        from './shape'

export const baseStyles = createBaseStyles()

export const createBigWidthStyles = createBaseShape({ size: 20 })
export const createSmallWidthStyles = createBaseShape({ size: 40 })

export const widthStyles = switchProp(prop('size', 'small'), () => ({
  big: createBigWidthStyles,
  small: createSmallWidthStyles,
}))

export const greyColorStyles = ({ theme }) =>
  createAppearanceStyles({
    borderColor: theme.colors.lightGrey,
    fontFamily: theme.fonts.primary,
    fontSize: theme.fontSizes.small,
  })
