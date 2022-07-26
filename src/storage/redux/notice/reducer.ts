import { actionTypes, NoticeAction, NoticeState } from './types'

const initialValues: NoticeState = {
  loading: false,
  notices: [],
  error: ''
}

const noticesReducer = (state:NoticeState = initialValues, action:NoticeAction): NoticeState => {
  switch (action.type) {
  case actionTypes.GET_NOTICES_REQUEST:
    return {
      ...state,
      loading: true
    }
  case actionTypes.GET_NOTICES_SUCCESS:
    return {
      ...state,
      loading: false,
      notices: action.notices
    }
  case actionTypes.GET_NOTICES_FAILURE:
    return {
      ...state,
      loading: false,
      error: 'error getting notices'
    }
  default:
    return state
  }
}

export default noticesReducer
