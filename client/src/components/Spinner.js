import React from 'react'
import styled, {keyframes} from 'styled-components'

const load3 = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`

export default styled.div`
  font-size: 10px;
  width: 11em;
  height: 11em;
  border-radius: 50%;
  background: linear-gradient(to right, #3CA1FF 10%, rgba(255, 255, 255, 0) 42%);
  position: relative;
  animation: ${load3} 0.5s infinite linear;
  transform: translateZ(0);
  :after {
    background: white;
    width: 85%;
    height: 85%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  :before {
    width: 50%;
    height: 50%;
    background: #3CA1FF;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }
`