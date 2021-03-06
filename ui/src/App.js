import './App.css';
import React, { useEffect } from 'react'
import {Redirect, Route, Switch, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Actions from './modshop-app/actions'
import styleVars from './common/global-styles/styles'
import Constants from './common/constants/appConstants'

import Navbar from './modshop-app/components/navbar'

import Home from './modshop-app/components/home'
import SignIn from './modshop-app/components/sign-in'
import SignUp from './modshop-app/components/sign-up'
import Spinner from './common/components/blocking-spinner'

import {
  MainWrapper,
  ContentWrapper,
  Footer
} from './Styles'
import { P } from './common/components/typography';

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
      <Navbar {...props}/>
      <ContentWrapper>
        <Switch>          
          <Route key='signIn' path='/signIn' render={() => <SignIn {...props}/>} />
          <Route key='signUp' path='/signUp' render={() => <SignUp {...props}/>} /> 
          <Route key='home' path='/home' render={() => <Home {...props}/>} />         
          <Redirect from='/' to='/home'/>
        </Switch>
      </ContentWrapper>     
      <Spinner showModal={props.spinnerState.status}/>
      <Footer>
        <P color={styleVars.colors.themeBackground}>{Constants.MODSHOP_FOOTER_LINE11} &copy; {Constants.MODSHOP_FOOTER_LINE12}</P>
      </Footer>     
    </MainWrapper>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
