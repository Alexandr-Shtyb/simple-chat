import { combineReducers } from '@reduxjs/toolkit'
import chatReducer from './chatReducer'

export const rootReducer = combineReducers({
  chat: chatReducer,
})
