import * as GlobalActions from './Global.action'
import * as SignInActions from './SignIn.action'

const actionCreators = Object.assign(
    {},
    GlobalActions,
    SignInActions
)

export default actionCreators