import { reducer as toastrReducer } from 'react-redux-toastr'
import { combineReducers } from 'redux'

import { authSlice } from '@/store/auth/auth.slice'

export const rootReducers = combineReducers({
	auth: authSlice.reducer,
	toastr: toastrReducer
})
