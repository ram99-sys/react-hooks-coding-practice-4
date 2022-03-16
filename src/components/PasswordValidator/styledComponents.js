import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #24263c;
  height: 100vh;
`

export const SubContainer = styled.div`
  background-color: #475569;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PasswordInput = styled.input`
  width: 250px;
  border: none;
  outline: none;
  padding: 10px;
`

export const ErrorMessage = styled.p`
  color: #ef4444;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 24px;
  font-family: 'Roboto';
`

export const Text = styled.p`
  color: #ffffff;
`
