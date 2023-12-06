import { useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Message from '../Message/Message'
import { convertDateToString } from '../../utils/converterDate'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import InitialForm from '../InitialForm/InitialForm'
import { Actions } from '../../redux/reducers/actions'

import {
  AppWrapper,
  ChatWrapper,
  Title,
  TitleWrapper,
  InputMessage,
  SendMessageButton,
  SendMessageFormWrapper,
  UsernameWrapper,
  DateWrapper,
  TextMessage,
  Warning,
  SortMessagesButton,
  SortMessagesButtonWrapper,
} from './style'

const App = () => {
  const dispatch = useAppDispatch()
  const messages = useAppSelector((state) => state.chat.messages)
  const descendingOrder = useAppSelector((state) => state.chat.descendingOrder)

  const socket = useRef<WebSocket | undefined>()
  const [connected, setConnected] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')
  const [username, setUsername] = useState<string>('')

  const connect = () => {
    socket.current = new WebSocket('ws://localhost:5000')

    socket.current.onopen = () => {
      const message = {
        id: uuidv4(),
        event: 'connection',
        date: new Date(Date.now()),
        username,
        message: value,
      }
      socket.current?.send(JSON.stringify(message))
      setConnected(true)
    }

    socket.current.onmessage = (event) => {
      const message = JSON.parse(event.data)
      dispatch({ type: Actions.addMessage, payload: message })
    }

    socket.current.onclose = () => {
      console.log('Socket закрыт')
    }

    socket.current.onerror = () => {
      console.log('Произошла ошибка')
    }
  }

  const sendMessage = async () => {
    const message = {
      id: uuidv4(),
      event: 'message',
      date: new Date(Date.now()),
      username,
      message: value,
    }
    socket.current?.send(JSON.stringify(message))
    setValue('')
  }

  if (!connected) {
    return (
      <InitialForm
        username={username}
        setUsername={setUsername}
        connect={connect}
      />
    )
  }

  const sortMessages = () => {
    dispatch({ type: Actions.sortMessages })

    descendingOrder
      ? dispatch({ type: Actions.changeOrderSort, payload: false })
      : dispatch({ type: Actions.changeOrderSort, payload: true })
  }

  return (
    <AppWrapper className="app">
      <ChatWrapper>
        <TitleWrapper>
          <Title>Чат</Title>
        </TitleWrapper>

        <div>
          {messages.map((message) => {
            if (
              message.message === 'Пользователь с таким именем уже существует'
            ) {
              setTimeout(() => {
                window.location.reload()
              }, 1500)

              return <Warning>{message.message}</Warning>
            } else {
              return (
                <div key={message.id}>
                  {message.event === 'connection' ? (
                    <Message>
                      <div>
                        <TextMessage>
                          Пользователь{' '}
                          <UsernameWrapper>{message.username}</UsernameWrapper>{' '}
                          подключился
                        </TextMessage>
                        <DateWrapper>
                          {convertDateToString(new Date(message.date))}
                        </DateWrapper>
                      </div>
                    </Message>
                  ) : (
                    <div>
                      <Message>
                        <TextMessage>
                          <UsernameWrapper>{message.username}</UsernameWrapper>:{' '}
                          {message.message}
                        </TextMessage>
                        <DateWrapper>
                          {convertDateToString(new Date(message.date))}
                        </DateWrapper>
                      </Message>
                    </div>
                  )}
                </div>
              )
            }
          })}
        </div>

        <SortMessagesButtonWrapper>
          <SortMessagesButton onClick={sortMessages}>
            Отсортировать по дате
          </SortMessagesButton>
        </SortMessagesButtonWrapper>

        <SendMessageFormWrapper>
          <InputMessage
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="Введите сообщение"
          />
          <SendMessageButton
            disabled={value ? false : true}
            onClick={sendMessage}
          >
            Отправить сообщение
          </SendMessageButton>
        </SendMessageFormWrapper>
      </ChatWrapper>
    </AppWrapper>
  )
}

export default App
