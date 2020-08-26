import styled, { css } from 'styled-components'

export enum ButtonSize {
  smol = 'smol',
  chonker = 'chonker',
  heftychonker = 'heftychonker',
}

interface Style {
  size?: ButtonSize
}

export const Button = styled.button<Style>`
  ${({ size }) => {
    if (size === ButtonSize.smol) {
      return css`
        padding: 4px 6px;
        font-size: 12px;
      `
    }
    if (size === ButtonSize.chonker) {
      return css`
        padding: 20px 30px;
        font-size: 60px;
      `
    }
    if (size === ButtonSize.heftychonker) {
      return css`
        padding: 80px 120px;
        font-size: 240px;
      `
    }
  }}
`

Button.defaultProps = {
  size: ButtonSize.smol,
}
