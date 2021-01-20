import './App.css';
import React from 'react'
import {Redirect, Route, Switch, withRouter} from 'react-router-dom'

import Home from './app/components/home'
import SignIn from './app/components/sign-in'
import SignUp from './app/components/sign-up'

import {
  MainWrapper,
  Backdrop 
} from './Styles'

const App = (props) => {  

  return (
    <MainWrapper>
      <Backdrop>           
        <Switch>          
          <Route key='signIn' path='/signIn' render={() => <SignIn {...props}/>} />
          <Route key='signUp' path='/signUp' render={() => <SignUp {...props}/>} /> 
          <Route key='home' path='/home' render={() => <Home {...props}/>} />         
          <Redirect from='/' to='/home'/>
        </Switch>                 
      </Backdrop> 
    </MainWrapper>
  )
}

export default withRouter(App);
