import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  padding: 0 10px;
  cursor: pointer;
  border-radius: 5px;
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

const Item = ({text, code, real}) => {
  return (
    <Row>
      <Text>{text}</Text>
      {real ? <Tag>real word</Tag> : <Tag style={{color: '#CCCCCC'}}>+ add to dictionary</Tag>}
    </Row>
  )
}

Item.propTypes = {
  
}

export default Item