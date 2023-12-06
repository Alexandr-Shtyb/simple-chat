export interface IMessage {
  id: string
  event: EventMessage
  date: string
  username: string
  message: string
}

type EventMessage = 'message' | 'connection'
