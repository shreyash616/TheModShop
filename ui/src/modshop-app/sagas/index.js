import {all} from 'redux-saga/effects'

import SignInSaga from './SignIn.saga'

export default function * rootSaga () {
    yield all([
        SignInSaga()
    ])
}