import styled, { css } from 'styled-components'

export const Button = styled.button`
  ${({ size }) => {
    if (size === 'smol') {
      return css`
        padding: 4px 6px;
        font-size: 12px;
      `
    }
    if (size === 'chonker') {
      return css`
        padding: 20px 30px;
        font-size: 60px;
      `
    }
    if (size === 'heftychonker') {
      return css`
        padding: 80px 120px;
        font-size: 240px;
      `
    }
  }}
`

Button.defaultProps = {
  size: 'smol',
}
