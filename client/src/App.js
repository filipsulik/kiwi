import React, {useMemo, useRef} from 'react'
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
  padding: 5px;
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
  const input = useRef(null)
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
        mutators={{
          addValue: ([digit], state, utils) => {
            const value = state.formState.values?.code || ''
            utils.changeValue(state, 'code', () => `${value}${digit}`)
            input.current.focus()
          },
        }}
        onSubmit={({code, ...rest}) => {
          setLoading(true)
          getSuggestions(code)
        }}
        render={({handleSubmit, active, form, errors}) => (
          <StyledForm>
            <FormSpy subscription={{values: true}} onChange={() => !errors.code && handleSubmit()} />
            <Wrapper>
              <Field
                ref={input}
                name="code"
                component={Input}
                validate={value => value?.length && !value.match(/^[2-9]*$/g)}
                loading={loading}
              />
              {active && (
                <Suggestions
                  onMouseDown={e => {
                    e.preventDefault()
                  }}
                  loading={loading}
                  data={data}
                />
              )}
            </Wrapper>
            <div style={{height: 140}} />
            <Keyboard
              onClick={form.mutators.addValue}
              onMouseDown={e => {
                e.preventDefault()
              }}
            />
          </StyledForm>
        )}
      />
    </Container>
  );
}

export default App;
