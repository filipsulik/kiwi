import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
`

const Text = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: ${props => props.theme.colors.black};
  line-height: 1.5;
`

const Code = styled.p`
  font-weight: 500;
  font-size: 8px;
  color: ${props => props.theme.colors.orange};
`

const Word = ({text, code}) => {
  return (
    <Wrapper>
      <Text>{text}</Text>
      <Code>{code}</Code>
    </Wrapper>
  )
}

export default Word