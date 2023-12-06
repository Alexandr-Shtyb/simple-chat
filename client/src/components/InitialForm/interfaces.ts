import { Dispatch, SetStateAction } from 'react'

export interface IInitialFormProps {
  username: string
  setUsername: Dispatch<SetStateAction<string>>
  connect: () => void
}
