import { WebSocketServer } from 'ws'
import { IMessage } from './intefaces.js'

const wss = new WebSocketServer(
  {
    port: 5000,
  },
  () => console.log(`Server started on 5000`),
)

const connectedUsers = new Set()

wss.on('connection', (ws) => {
  ws.on('message', (message: IMessage) => {
    message = JSON.parse(message.toString())
    if (message.event === 'connection') {
      if (connectedUsers.has(message.username)) {
        ws.send(
          JSON.stringify({
            event: 'error',
            message: 'Пользователь с таким именем уже существует',
          }),
        )
      } else {
        connectedUsers.add(message.username)
        broadcastMessage(message)
      }
    } else {
      broadcastMessage(message)
    }
  })
})

function broadcastMessage(message: IMessage) {
  wss.clients.forEach((client) => {
    client.send(JSON.stringify(message))
  })
}
