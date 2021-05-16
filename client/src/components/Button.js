import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {t9} from '../utils'

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 70px;
  border-radius: 40px;
  background: #F4F4F4;
  margin: 5px;
  border-image: none;
  border-style: none;
  cursor: pointer;
  :hover {
    background: #C4C4C4;
  }
  :active {
    background: #FFA53C;
    * {
      color: white;
    }
  }
  :disabled, [disabled] {
    pointer-events: none;
    * {
      color: #C4C4C4;
    }
  }
`

const Digit = styled.p`
  color: black;
  font-weight: 700;
  font-size: 30px;
  margin: 0;
`

const Letters = styled.p`
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.1em;
  color: #666666;
  margin: 0;
`

const ButtonComponent = ({char, ...rest}) => {
  return (
    <Button type="button" disabled={['0', '1', '*', '#'].includes(char)} {...rest}>
      <Digit>{char}</Digit>
      {t9[char].length > 1 && <Letters>{t9[`${char}`]}</Letters>}
    </Button>
  )
}

ButtonComponent.propTypes = {
  char: PropTypes.string,
}

export default ButtonComponent