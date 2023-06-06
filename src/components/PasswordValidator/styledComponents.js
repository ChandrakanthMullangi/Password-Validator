// Style your elements here

import styled from 'styled-components'

export const Main = styled.main`
  height: 100vh;
  width: 100vw;
  background-color: #24263c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PasswordContainer = styled.section`
  background-color: #383a4e;
  padding: 25px;
  box-sizing: border-box;
  height: 400px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`

export const PasswordTitle = styled.h1`
  font-family: Roboto;
  color: #ffffff;
  font-size: 40px;
  font-weight: normal;
  margin-bottom: 10px;
`

export const PasswordText = styled.p`
  font-family: Roboto;
  color: #f8fafc;
  margin-bottom: 50px;
`

export const PasswordInput = styled.input`
  width: 350px;
  padding: 8px 16px;
  background-color: #edeeff;
  outline: none;
  border: none;
`

export const PasswordMessage = styled.p`
  font-family: Roboto;
  color: #ef4444;
`
