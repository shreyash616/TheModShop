import axios from 'axios'
import {takeEvery, put} from 'redux-saga/effects'

import * as ACTION_TYPES from '../actions/action-types'

import actions from '../actions'


function * watchSignIn (action) {  
    yield put(actions.showServiceCallModal())     
    const signInServiceData = yield axios.post('http://192.168.0.136:3001/signIn', action.payload).then((successData) => {                    
        return successData.data
    }).catch((failureData) => {            
        return failureData
    })
    if (signInServiceData instanceof Error) {
        yield put (actions.SignInFailure(signInServiceData))
    } else {
        yield put (actions.SignInSuccess(signInServiceData))
    }
    yield put(actions.hideServiceCallModal())
}

export default function * signInSaga () {
    yield takeEvery(ACTION_TYPES.INITIATE_SIGN_IN, watchSignIn)
}