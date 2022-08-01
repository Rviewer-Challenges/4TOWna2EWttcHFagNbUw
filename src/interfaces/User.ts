import { Notice } from './Notice'

export interface User {
  id: string
  email: string
  name: string
  list: Notice[]
  provider: number[]
}
