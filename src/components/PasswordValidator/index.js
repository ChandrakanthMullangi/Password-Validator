// Write your code here

import {useState} from 'react'

import {
  Main,
  PasswordContainer,
  PasswordTitle,
  PasswordText,
  PasswordInput,
  PasswordMessage,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  return (
    <Main>
      <PasswordContainer>
        <PasswordTitle>Password Validator</PasswordTitle>
        <PasswordText>
          Check how strong and secure is your password
        </PasswordText>
        <PasswordInput
          type="password"
          onChange={onChangePassword}
          value={password}
        />
        <PasswordMessage>
          {password.length >= 8
            ? ''
            : 'Your password must be at least 8 characters'}
        </PasswordMessage>
      </PasswordContainer>
    </Main>
  )
}

export default PasswordValidator
