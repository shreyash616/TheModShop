import axios from 'axios'
import  actions from '../../app/actions'

export function * triggerServiceCall (method, route, payload, put) {
    yield put(actions.showServiceCallModal())
    if(method === 'POST') {
        yield axios.post('http://192.168.42.145:3001/'+route, payload).then((successData) => {                    
            return successData.data
        }).catch((failureData) => {            
            return failureData
        })
    }
    yield put(actions.hideServiceCallModal())
}