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

export const AppWrapper = styled(WrapperForm)``

export const ChatWrapper = styled.div`
  border: 5px dashed #0000ff;
  border-radius: 10px;
  padding: 10px 20px;
`

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  color: #fff;
`

export const TitleWrapper = styled.div`
  background-color: #1499b8;
  border-radius: 10px;
  padding: 0 5px;
`

export const SendMessageFormWrapper = styled.div`
  display: flex;
  aligh-items: center;
`

export const InputMessage = styled(Input)``

export const SendMessageButton = styled.button`
  border: none;
	font-family: inherit;
	font-size: inherit;
	color: inherit;
	background: none;
	cursor: pointer;
  border: 1px solid #0000ff;
	padding: 5px 10px;
	display: inline-block;
	letter-spacing: 1px;
	font-weight: 700;
	outline: none;
	position: relative;
	-webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	transition: all 0.3s;

  &:disabled {
    &:hover {
      cursor: not-allowed;
    }
  }
`

export const UsernameWrapper = styled.span`
  font-weight: 700;
`

export const DateWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const TextMessage = styled.div`
  margin-bottom: 10px;
`

export const Warning = styled.div`
  font-weight: 700;
  margin-bottom: 20px;
`
export const SortMessagesButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`

export const SortMessagesButton = styled(Button)`
  display: flex;
  justify-content: center;
`
