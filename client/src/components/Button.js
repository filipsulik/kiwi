import React from 'react'
import styled from 'styled-components'
import {t9} from '../utils'

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 70px;
  border-radius: 40px;
  background: ${props => props.theme.colors.grey1};
  margin: 5px;
  :hover {
    background: ${props => props.theme.colors.grey3};
  }
  :active {
    background: ${props => props.theme.colors.orange};
    * {
      color: ${props => props.theme.colors.white};
    }
  }
  :disabled, [disabled] {
    pointer-events: none;
    * {
      color: ${props => props.theme.colors.grey3};
    }
  }
`

const Digit = styled.p`
  color: ${props => props.theme.colors.black};
  font-weight: 700;
  font-size: 30px;
`

const Letters = styled.p`
  font-weight: 600;
  font-size: 12px;
  color: ${props => props.theme.colors.grey4};
`

const ButtonComponent = ({char, ...rest}) => {
  return (
    <Button type="button" disabled={['0', '1', '*', '#'].includes(char)} {...rest}>
      <Digit>{char}</Digit>
      {t9[char].length > 1 && <Letters>{t9[`${char}`]}</Letters>}
    </Button>
  )
}

export default ButtonComponent