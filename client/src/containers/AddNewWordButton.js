import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  
`

const AddNewWordButton = ({children, ...rest}) => {
  return (
    <Button type="button" {...rest}>
      {children}
    </Button>
  )
}

export default AddNewWordButton