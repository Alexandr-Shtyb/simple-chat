import { FC } from 'react'
import { IInitialFormProps } from './interfaces'

import {
    WrapperForm,
    Label,
    Form,
    Input,
    Button,
    WrapperInputAndButtonForm
  } from './style'


const InitialForm: FC<IInitialFormProps> = ({username, setUsername, connect}) => {
  return (
    <WrapperForm>
      <Form>
        <Label>Введите свой ник для входа в чат</Label>
        <WrapperInputAndButtonForm>
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="unknown developer"
          />
          <Button onClick={connect}>Войти</Button>
        </WrapperInputAndButtonForm>
      </Form>
    </WrapperForm>
  )
}

export default InitialForm
