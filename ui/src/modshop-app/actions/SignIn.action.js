import * as ACTION_TYPES from './action-types'

export const InitiateSignIn = (payload) => {
    return {
        type: ACTION_TYPES.INITIATE_SIGN_IN,
        payload
    }
}

export const SignInSuccess = (data) => {
    return {
        type: ACTION_TYPES.SIGN_IN_SUCCESS,
        data
    }
}

export const SignInFailure = (data) => {
    return {
        type: ACTION_TYPES.SIGN_IN_FAILURE,
        data
    }
}

export const initiateSignOut = () => {
    return {
        type: ACTION_TYPES.CLEAR_SIGN_IN
    }
}

export const clearSignInData = () => {
    return {
        type: ACTION_TYPES.CLEAR_SIGN_IN
    }
}