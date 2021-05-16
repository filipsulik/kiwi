import React, {useEffect, useState} from 'react'
import Spinner from './Spinner'
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
  border: 1px solid black;
  box-sizing: border-box;
  padding: 0 50px 0 20px;
  ${props => props.error && css`
    border-color: red !important;
    animation: ${shake} 0.2s linear infinite;
  `}
`
const SpinnerWrapper = styled.div`
  height: 100%;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
`

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

let timeout

const InputComponent = ({input, meta, loading}) => {
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
    <InputWrapper>
      <Input autoComplete="off" error={error} {...input} />
      {loading && <SpinnerWrapper>
        <div style={{transform: 'scale(0.2)'}}>
          <Spinner />
        </div>
      </SpinnerWrapper>}
    </InputWrapper>
  )
}

export default InputComponent