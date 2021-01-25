import * as ACTION_TYPES from './action-types'

export const showServiceCallModal = () => {
    return {
        type: ACTION_TYPES.TRIGGER_SERVICE_CALL
    }
}

export const hideServiceCallModal = () => {
    return {
        type: ACTION_TYPES.STOP_SERVICE_CALL
    }
}