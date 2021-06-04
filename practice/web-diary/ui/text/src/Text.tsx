import styled                       from '@emotion/styled'
import { color, space, typography } from 'styled-system'

export const Text = styled('span')(color, typography, space)

Text.defaultProps = {
  fontFamily: 'primary',
  fontSize: 'small',
  textAlign: 'center',
}
