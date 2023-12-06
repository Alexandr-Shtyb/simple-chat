export interface IMessage {
  id: string
  event: EventMessage
  date: Date
  username: string
  message: string
}

type EventMessage = 'message' | 'connection'
