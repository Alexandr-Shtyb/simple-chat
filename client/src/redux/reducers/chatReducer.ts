import { createReducer, createAction } from '@reduxjs/toolkit'
import { IState } from './intefaces'
import { IMessage } from '../../components/App/inerfaces'
import { Actions } from './actions'

const initialState: IState = {
  messages: [],
  descendingOrder: true,
}

const addMessage = createAction<IMessage>(Actions.addMessage)
const changeOrderSort = createAction<boolean>(Actions.changeOrderSort)
const sortMessages = createAction<IMessage[]>(Actions.sortMessages)

export default createReducer(initialState, (builder) => {
  builder.addCase(addMessage, (state, action) => {
    state.messages.push(action.payload)
  })
  builder.addCase(changeOrderSort, (state, action) => {
    state.descendingOrder = action.payload
  })
  builder.addCase(sortMessages, (state) => {
    if (state.descendingOrder) {
      state.messages.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      )
    } else {
      state.messages.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      )
    }
  })
})
