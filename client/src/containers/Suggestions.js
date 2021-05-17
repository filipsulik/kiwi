import React, {useCallback} from 'react'
import styled from 'styled-components'
import Item from './Item'
import {List} from 'react-virtualized'

const Wrapper = styled.div`
  position: absolute;
  top: 70px;
  box-sizing: border-box;
  background: ${props => props.theme.colors.white};
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
`

const Suggestions = ({loading, data, onPick, ...rest}) => {
  const rowRenderer = useCallback(({
     index,
     key,
     style,
   }) => {
    const suggestion = data[index]
    return (
      <Item key={key} style={style} onClick={() => onPick(suggestion)} {...suggestion} />
    )
  }, [data, onPick])
  if (loading || !data?.length) return null
  return (
    <Wrapper {...rest}>
      <List
        width={320}
        height={100}
        rowCount={data.length}
        rowHeight={30}
        rowRenderer={rowRenderer}
        style={{padding: 10}}
      />
    </Wrapper>
  )
}

export default Suggestions