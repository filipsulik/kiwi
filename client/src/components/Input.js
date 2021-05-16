import React, {useEffect, useState} from 'react'
import styled, {keyframes, css} from 'styled-components'

const shake = keyframes`
  8%, 41% {
    transform: translateX(-3px);
  }
  25%, 58% {
    transform: translateX(3px);
  }
  75% {
    transform: translateX(-1px);
  }
  92% {
    transform: translateX(1px);
  }
  0%, 100% {
    transform: translateX(0);
  }
`

const Input = styled.input`
  outline: none;
  height: 50px;
  ${props => props.error && css`
    border-color: red !important;
    animation: ${shake} 0.2s linear infinite;
  `}
`

let timeout

const InputComponent = ({input, meta}) => {
  const [error, setError] = useState(false)

  const throwError = () => {
    if (timeout) {
      clearTimeout(timeout)
    }
    input.onChange(input.value.slice(0, input.value.length - 1))
    setError(true)
    timeout = setTimeout(() => setError(false), 200)
  }

  useEffect(() => {
    if (meta.error) {
      throwError()
    }
  }, [meta.error])

  useEffect(() => {
    return () => clearTimeout(timeout)
  }, [])

  return (
    <Input error={error} {...input} />
  )
}

export default InputComponent