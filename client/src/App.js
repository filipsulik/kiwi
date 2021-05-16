import React, {useMemo} from 'react'
import styled from 'styled-components'
import {Field, Form, FormSpy} from 'react-final-form'
import {Keyboard, Suggestions} from './containers'
import {Input} from './components'

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 500px;
  margin: auto;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`

const debounce = (func) => {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => { func.apply(this, args) }, 300)
  }
}

function App() {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const getSuggestions = useMemo(() => debounce((code) => {
    if (!code) {
      setData(() => null)
      setLoading(false)
      return
    }
    fetch(`/words/${code}`)
      .then((res) => res.json())
      .then((data) => {
        setData(() => data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }), [])
  return (
    <Container>
      <Form
        onSubmit={({code}) => {
          setLoading(true)
          getSuggestions(code)
        }}
        render={({handleSubmit}) => (
          <StyledForm>
            <FormSpy subscription={{values: true}} onChange={handleSubmit} />
            <Wrapper>
              <Field
                name="code"
                component={Input}
                validate={value => value?.length && !value.match(/^[2-9]*$/g)}
                loading={loading}
              />
              <Suggestions loading={loading} data={data} />
            </Wrapper>
            <div style={{height: 100}} />
            <Keyboard />
          </StyledForm>
        )}
      />
    </Container>
  );
}

export default App;
