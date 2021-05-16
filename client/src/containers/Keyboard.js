import React from 'react'
import styled from 'styled-components'
import {Button} from '../components'
import PropTypes from 'prop-types'

const Grid = styled.div`
  display: inline-grid;
  grid-template-columns: auto auto auto;
`

const Keyboard = ({onClick, ...rest}) => {
  return (
    <Grid {...rest}>
      {['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#']
        .map(char => <Button onClick={() => onClick(char)} key={char} char={char} />)}
    </Grid>
  )
}

Keyboard.propTypes = {

}

export default Keyboard