import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

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
`

const Suggestions = ({loading, data}) => {
  if (loading || !data?.length) return null
  return (
    <Wrapper>
      {data?.map(suggestion => <p>{suggestion}</p>)}
    </Wrapper>
  )
}

Suggestions.propTypes = {
  data: PropTypes.array,
}

export default Suggestions