import React from 'react'
import styled from 'styled-components'
import {Word} from '../components'

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  right: 0;
  transform: translate(100%, 0);
  flex-wrap: wrap;
  padding: 0 10px;
  box-sizing: border-box;
  max-width: calc((100vw - 330px) / 2);
`

const RenderedText = ({data}) => {
  return (
    <Wrapper>
      {data.map(word => <Word key={word.text} {...word} />)}
    </Wrapper>
  )
}

export default RenderedText