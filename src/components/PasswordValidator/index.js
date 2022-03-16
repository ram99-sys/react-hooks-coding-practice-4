import {useState} from 'react'

import {
  Container,
  SubContainer,
  PasswordInput,
  ErrorMessage,
  Heading,
  Text,
} from './styledComponents'

const PasswordValidator = () => {
  const [userPassword, setPassword] = useState('')
  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  return (
    <Container>
      <SubContainer>
        <Heading>Password Validator</Heading>
        <Text>Check how strong and secure is your password</Text>
        <PasswordInput
          type="password"
          value={userPassword}
          onChange={onChangePassword}
        />
        {userPassword.length < 8 && (
          <ErrorMessage>
            Your password must be at least 8 characters
          </ErrorMessage>
        )}
      </SubContainer>
    </Container>
  )
}

export default PasswordValidator
