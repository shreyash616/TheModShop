import * as SignInReducer from './SignIn.reducer'
import * as GlobalReducer from './Global.reducer'

const allReducers = Object.assign(
    {},
    GlobalReducer,
    SignInReducer
)

export default allReducers