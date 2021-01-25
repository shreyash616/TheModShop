import * as ACTION_TYPES from '../actions/action-types'

const INITIAL_STATE = {
    data: null,
    error: null,
    status: null
}

export const SignInReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case ACTION_TYPES.SIGN_IN_SUCCESS: {               
            const successData = {...state, data: action.data, status: 'success'}
            return successData
        }
        case ACTION_TYPES.SIGN_IN_FAILURE: {
            const failureData = {...state, error: action.data, status: 'error'}
            return failureData
        }
        case ACTION_TYPES.CLEAR_SIGN_IN: {
            return INITIAL_STATE
        }
        default:
            return state
    }

}