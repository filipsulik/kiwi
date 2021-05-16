import React from 'react'
import styled from 'styled-components'
import {Field, Form, FormSpy} from 'react-final-form'
import {Keyboard} from './containers'
import {Input} from './components'

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 500px;
  margin: auto;
  align-items: center;
  justify-content: center;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`

function App() {
  const [data, setData] = React.useState(null);
  return (
    <Container>
      <Form
        onSubmit={({code}) => code?.length && fetch(`/words/${code}`)
          .then((res) => res.json())
          .then((data) => setData(() => data))}
        render={({handleSubmit}) => (
          <StyledForm>
            <FormSpy subscription={{values: true}} onChange={handleSubmit} />
            <Field
              name="code"
              component={Input}
              validate={value => value?.length && !value.match(/^[2-9]*$/g)}
            />
            <div style={{height: 100}} />
            <Keyboard />
          </StyledForm>
        )}
      />
    </Container>
  );
}

export default App;
