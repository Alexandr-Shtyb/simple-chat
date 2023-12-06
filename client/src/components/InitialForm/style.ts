import styled from '@emotion/styled'

export const WrapperForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const Form = styled.div`
  border: 1px solid #0000ff;
  padding: 50px;
`

export const Label = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
`

export const WrapperInputAndButtonForm = styled.div`
  display: flex;
`

export const Input = styled.input`
  width: 100%;
  height: 40px;
  font-size: 16px;
  transition: 0.6s;
  border: none;
  border-bottom: 1px solid #CCC;
  background-color: transparent;
  padding: 5px;
  margin-right: 20px;
  &:focus {
    outline: none;
    border-bottom: 1px solid #28a2a2;
  }
`

export const Button = styled.button`
  padding: 3px 5px 5px 5px;
  border: none;
  font: inherit;
  color: inherit;
  background-color: #f2f3f4;
  cursor: pointer;
  border-radius: 5px;
  min-width: 100px;

  &:hover {
    color: #fff;
    background-color: #0000ff;
  }
`
