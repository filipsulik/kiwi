import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 20px;
`

const Item = ({text, code, real}) => {
  return (
    <Row>
      <p>{text}</p>
      {real ? <p color="orange">real word</p> : <a>+ add to dictionary</a>}
    </Row>
  )
}

Item.propTypes = {
  
}

export default Item