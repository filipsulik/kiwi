import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {Item} from '../components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  top: 70px;
  padding: 10px;
  box-sizing: border-box;
  max-height: 100px;
  overflow: auto;
  background: #FFFFFF;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
`

const Suggestions = ({loading, data, ...rest}) => {
  if (loading || !data?.length) return null
  return (
    <Wrapper {...rest}>
      {data?.map(suggestion => <Item key={suggestion.text} {...suggestion} />)}
    </Wrapper>
  )
}

Suggestions.propTypes = {
  data: PropTypes.array,
}

export default Suggestions