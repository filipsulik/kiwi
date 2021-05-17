import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  height: 30px;
  border-radius: 5px;
  background: transparent;
  :hover {
    * {
      color: ${props => props.theme.colors.blue} !important;
    }
  }
`

const AddNewWordButton = ({children, ...rest}) => {
  return (
    <Button type="button" {...rest}>
      {children}
    </Button>
  )
}

export default AddNewWordButton