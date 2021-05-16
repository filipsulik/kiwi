import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {Item} from '../components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border: 1px solid black;
  border-radius: 2px;
  position: absolute;
  width: 100%;
  top: 70px;
  padding: 20px;
  box-sizing: border-box;
  max-height: 200px;
  overflow: auto;
`

const Suggestions = ({loading, data}) => {
  if (loading || !data?.length) return null
  return (
    <Wrapper>
      {data?.map(suggestion => <Item key={suggestion.text} {...suggestion} />)}
    </Wrapper>
  )
}

Suggestions.propTypes = {
  data: PropTypes.array,
}

export default Suggestions