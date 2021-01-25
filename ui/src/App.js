import './App.css';
import React, { useEffect } from 'react'
import {Redirect, Route, Switch, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Actions from './app/actions'

import Home from './app/components/home'
import SignIn from './app/components/sign-in'
import SignUp from './app/components/sign-up'
import Spinner from './common/components/blocking-spinner'

import {
  MainWrapper,
  Backdrop,
  BottomSeparator
} from './Styles'

const mapStateToProps = store => ({
  spinnerState: store.global.spinnerState,
  signInStatus: store.signIn.status
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

const App = (props) => {  

  useEffect(()=>{
    props.signInStatus === 'success' && setTimeout(()=>{
      props.actions.initiateSignOut()
    }, [900000])
    // eslint-disable-next-line
  }, [props.signInStatus])

  return (
    <MainWrapper>
      <Backdrop>           
        <Switch>          
          <Route key='signIn' path='/signIn' render={() => <SignIn {...props}/>} />
          <Route key='signUp' path='/signUp' render={() => <SignUp {...props}/>} /> 
          <Route key='home' path='/home' render={() => <Home {...props}/>} />         
          <Redirect from='/' to='/home'/>
        </Switch>
        <BottomSeparator/>
        <Spinner showModal={props.spinnerState.status}/>
      </Backdrop> 
    </MainWrapper>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
