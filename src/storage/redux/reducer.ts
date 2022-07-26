import { combineReducers } from 'redux'
import noticesReducer from './notice/reducer'

const rootReducer = combineReducers({
  noticeReducer: noticesReducer
})

export default rootReducer
