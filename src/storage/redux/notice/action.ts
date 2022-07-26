import { Notice } from '../../../interfaces/Notice'
import { getNews } from '../../../services/api/news'
import { actionTypes, DispatchType, NoticeAction } from './types'

const getNoticesRequest = ():NoticeAction => {
  return {
    type: actionTypes.GET_NOTICES_REQUEST,
    notices: []
  }
}

const getNoticesSuccess = (notices: Notice[]):NoticeAction => {
  return {
    type: actionTypes.GET_NOTICES_SUCCESS,
    notices
  }
}

const getNoticesFailure = ():NoticeAction => {
  return {
    type: actionTypes.GET_NOTICES_FAILURE,
    notices: []
  }
}

export const getNotices = () => {
  return (dispatch:DispatchType) => {
    dispatch(getNoticesRequest())
    getNews().then(notices => dispatch(getNoticesSuccess(notices))).catch(() => dispatch(getNoticesFailure()))
  }
}
