import React, { useState } from 'react'
import { StyledComponentProps, DefaultTheme } from 'styled-components'
import * as S from './styled'

export const Input: React.FC<StyledComponentProps<'input', DefaultTheme, {}, never>> = ({
  onFocus,
  onBlur,
  ...props
}) => {
  const [catVisible, setCatVisible] = useState(false)

  const handleOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    onFocus && onFocus(e)
    setCatVisible(true)
  }

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    onBlur && onBlur(e)
    setCatVisible(false)
  }

  return (
    <S.Wrapper>
      <S.Input {...props} onFocus={handleOnFocus} onBlur={handleOnBlur} />
      {catVisible && <S.Img alt="snorkeling cat" src="https://cdn2.thecatapi.com/images/2kt.jpg" />}
    </S.Wrapper>
  )
}
