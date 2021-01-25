import {combineReducers} from 'redux'

import allReducers from './reducer_app'

const appReducer = combineReducers({
    global: allReducers.GlobalReducer,
    signIn: allReducers.SignInReducer    
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer