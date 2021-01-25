import * as ACTION_TYPES from '../actions/action-types'

const INITIAL_STATE = {    
    spinnerState: {
        status: false
    }
}

export const GlobalReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case ACTION_TYPES.TRIGGER_SERVICE_CALL: {
            const successData = {...state, spinnerState: {
                status: true
            }}
            return successData
        }
        case ACTION_TYPES.STOP_SERVICE_CALL: {
            const failureData = {...state, spinnerState: {
                status: false
            }}
            return failureData
        }
        default:
            return state
    }

}