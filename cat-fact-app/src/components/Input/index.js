import React, { useState } from 'react'
import * as S from './styled'

export const Input = ({ onFocus, onBlur, ...props }) => {
  const [catVisible, setCatVisible] = useState(false)

  const handleOnFocus = e => {
    onFocus && onFocus(e)
    setCatVisible(true)
  }

  const handleOnBlur = e => {
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
