import { FC } from 'react'
import { IMessageProps } from './interfaces'

import { MessageWrapper } from './style'

const Message: FC<IMessageProps> = ({ children }) => {
  return <MessageWrapper>{children}</MessageWrapper>
}

export default Message
