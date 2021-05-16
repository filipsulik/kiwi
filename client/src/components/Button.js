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
  border: 1px black solid;
  border-radius: 2px;
  margin: 5px;
`

const ButtonComponent = ({char}) => {
  return (
    <Button type="button" disabled={['0', '1', '*', '#'].includes(char)}>
      <div>{char}</div>
      {t9[char].length > 1 && <div style={{marginTop: 10}}>{t9[`${char}`]}</div>}
    </Button>
  )
}

ButtonComponent.propTypes = {
  char: PropTypes.string,
}

export default ButtonComponent