import { IMessage } from '../../components/App/inerfaces'

export interface IState {
  messages: IMessage[]
  descendingOrder: boolean
}
