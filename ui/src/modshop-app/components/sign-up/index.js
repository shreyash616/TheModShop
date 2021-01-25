import React, { useEffect, useRef, useState } from 'react'
import {connect} from 'react-redux'

import Button from '../../../common/components/button'
import TextInput from '../../../common/components/text-input'
import { H1 } from '../../../common/components/typography'
import Alert from '../../../common/components/alert'

import Constants from '../../../common/constants/signUpConstants'

import {getKeyValue} from '../../../common/utils/utils'

import {
    PageWrapper,
    RowWrapper,
    HeaderButtonWrapper,
    FormWrapper,
    InputWrapper,    
    ColumnWrapper,
    AlertWrapper
} from './styles'

const mapStateToProps = store => ({
    signInData: store.signIn
})

const SignUp = (props) => {

    const nameRef = useRef()
    const usernameRef = useRef()
    const passwordRef = useRef()

    const [name, setName] = useState('')
    const [nameError, setNameError] = useState('')
    const [userName, setUserName] = useState('')
    const [userNameError, setUserNameError] = useState('')    
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [showAlert, setShowAlert] = useState('')   

    const focusOnField = (id, ref) => {
        const field = document.getElementById(id)
        field && field.focus()
        ref && ref.current && window.scroll(0, ref.current.offsetTop)
    }

    const redirectToLink = (link) => {        
        setTimeout(() => {
            props.history.push('/'+link)
        }, 500)
    }

    useEffect(() => {
        props.actions.clearSignInData()
        // eslint-disable-next-line
    }, [])

    useEffect(()=>{
        const signInStatus = getKeyValue(['signInData', 'status'], props)        
        if(signInStatus === 'success'){
            props.history.push('/home')                                
        } else if (signInStatus === 'error') {            
            const errorMessage = getKeyValue(['signInData', 'error', 'data', 'data', 'errorDesc'], props) || getKeyValue(['signInData', 'error', 'message'], props)
            setShowAlert(errorMessage)
            props.actions.clearSignInData()
        }
    }, [props])

    const handleChange = (value, field) => {
        if(field === 'username') {
            if(Constants.USERNAME_REGEX.test(value)){
                setUserName(value)
                setUserNameError('')
            } else {
                setUserNameError(Constants.USERNAME_INVALID_ERROR)
            }
        } else if (field === 'name') {
            if(Constants.NAME_REGEX.test(value)){
                setName(value)
                setNameError('')
            } else {
                setNameError(Constants.NAME_INVALID_ERROR)
            }
        } else {
            setPassword(value)
            setPasswordError('')
        }
    }

    const clearAllErrors = () => {
        setNameError('')
        setUserNameError('')
        setPasswordError('')
    }

    const handleSignIn = () => {
        const payload = {
            data: {
                username: userName,
                password
            }
        }
        props.actions.InitiateSignIn(payload)
    }

    const validateSignUp = () => {
        clearAllErrors()
        if(name){
            if(userName){
                setUserNameError('')
                if(password){
                    setPasswordError('')
                    handleSignIn()
                } else {
                    setPasswordError(Constants.PASSWORD_EMPTY_ERROR)
                    focusOnField('password-input', passwordRef)
                }
            } else {
                setUserNameError(Constants.USERNAME_EMPTY_ERROR)
                focusOnField('username-input', usernameRef)
            }
        } else {
            setNameError(Constants.NAME_EMPTY_ERROR)
            focusOnField('name-input', nameRef)
        }
        
    }

    const HeaderButtons = () => {
        return (
            <RowWrapper>                
                <HeaderButtonWrapper rightMargin>
                    <Button onClick={() => redirectToLink('home')} onKeyPress={() => redirectToLink('home')}>{Constants.HOME}</Button>
                </HeaderButtonWrapper>
                <HeaderButtonWrapper>
                    <Button onClick={() => redirectToLink('signIn')} onKeyPress={() => redirectToLink('signIn')}>{Constants.SIGN_IN}</Button>
                </HeaderButtonWrapper>
            </RowWrapper>
        )
    }
    
    const SignInForm = (
        <FormWrapper>            
            <H1>{Constants.SIGN_UP_HEADING}</H1>
            <InputWrapper ref={nameRef}>
                <TextInput
                    id='name'
                    label={Constants.NAME_LABEL}
                    ariaLabel={Constants.NAME_LABEL}
                    placeholder={Constants.NAME_LABEL}
                    value={name}
                    onChange={(value) => handleChange(value, 'name')}
                    length={16}
                    error={!!nameError}
                    errorMessage={nameError}                    
                />
            </InputWrapper>
            <InputWrapper ref={usernameRef}>
                <TextInput
                    id='username'
                    label={Constants.USERNAME_LABEL}
                    ariaLabel={Constants.USERNAME_LABEL}
                    placeholder={Constants.USERNAME_LABEL}
                    value={userName}
                    onChange={(value) => handleChange(value, 'username')}
                    length={16}
                    error={!!userNameError}
                    errorMessage={userNameError}                    
                />
            </InputWrapper>
            <InputWrapper ref={passwordRef}>
                <TextInput
                    id='password'
                    label={Constants.PASSWORD_LABEL}
                    ariaLabel={Constants.PASSWORD_LABEL}
                    placeholder={Constants.PASSWORD_LABEL}
                    type='password'
                    value={password}
                    onChange={(value) => handleChange(value, 'password')}
                    length={16}
                    error={!!passwordError}
                    errorMessage={passwordError}
                />
            </InputWrapper>
            <ColumnWrapper>
                <HeaderButtonWrapper fullWidth>
                    <Button onClick={validateSignUp} onKeyPress={validateSignUp}>{Constants.SIGN_UP}</Button>
                </HeaderButtonWrapper>                
            </ColumnWrapper>
        </FormWrapper>
    )

    return (
        <PageWrapper>
            <HeaderButtons/>
            {!!showAlert && <AlertWrapper><Alert reason='error' closeAlert={() => setShowAlert('')}><span tabIndex={-1}>{showAlert}</span></Alert></AlertWrapper>}            
            {SignInForm}
        </PageWrapper>
    )
}

export default connect(mapStateToProps, null)(SignUp)