import { Notice } from '../../../interfaces/Notice'

export const actionTypes = {
  GET_NOTICES_REQUEST: 'GET_NOTICES_REQUEST',
  GET_NOTICES_SUCCESS: 'GET_NOTICES_SUCCESS',
  GET_NOTICES_FAILURE: 'GET_NOTICES_FAILURE'
}

export type NoticeState = {
  loading: boolean
  notices: Notice[]
  error: string
}

export type NoticeAction = {
  type: string
  notices: Notice[]
}

export type DispatchType = (args: NoticeAction) => NoticeAction
