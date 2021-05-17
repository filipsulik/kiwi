import React, {useState} from 'react'
import styled from 'styled-components'
import AddNewWordButton from './AddNewWordButton'

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  padding: 0 10px;
  cursor: pointer;
  border-radius: 5px;
  flex-shrink: 0;
  :hover {
    background: #F4F4F4;
  }
`

const Text = styled.p`
  color: #666666;
  font-size: 16px;
  font-weight: 500;
`

const Tag = styled.p`
  font-size: 10px;
  font-weight: 500;
  color: #FFA53B;
`

const Item = ({text, code, real: realTmp, ...rest}) => {
  const [real, setReal] = useState(realTmp)
  return (
    <Row {...rest}>
      <Text>{text}</Text>
      {real
        ? <Tag>real word</Tag>
        : (
          <AddNewWordButton
            onClick={e => {
              e.stopPropagation()
              fetch('/words', {
                method: 'POST',
                body: JSON.stringify({text, code}),
                headers: {
                  'content-type': 'application/json',
                }
              }).then(() => setReal(true))
            }}
          >
            <Tag style={{color: '#CCCCCC'}}>+ add to dictionary</Tag>
          </AddNewWordButton>
        )}
    </Row>
  )
}

export default Item