import React, {useState} from 'react'
import styled from 'styled-components'
import AddNewWordButton from './AddNewWordButton'
import theme from '../theme'

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  padding: 0 10px;
  cursor: pointer;
  border-radius: 5px;
  box-sizing: border-box;
  flex-shrink: 0;
  :hover {
    background: ${props => props.theme.colors.grey1};
  }
`

const Text = styled.p`
  color: ${props => props.theme.colors.grey4};
  font-size: 16px;
  font-weight: 500;
`

const Tag = styled.p`
  font-size: 10px;
  font-weight: 500;
  color: ${props => props.theme.colors.orange};
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
            <Tag style={{color: theme.colors.grey4}}>+ add to dictionary</Tag>
          </AddNewWordButton>
        )}
    </Row>
  )
}

export default Item