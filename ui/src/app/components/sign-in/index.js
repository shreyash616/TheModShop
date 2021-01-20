import React, { useRef, useState } from 'react'

import Button from '../../../common/components/button'
import TextInput from '../../../common/components/text-input'
import { H2 } from '../../../common/components/typography'

import Constants from '../../../common/constants/signInConstants'

import {
    PageWrapper,
    RowWrapper,
    HeaderButtonWrapper,
    FormWrapper,
    InputWrapper,
    Center,
    ColumnWrapper,
    TextButton
} from './styles'

const SignIn = (props) => {

    const usernameRef = useRef()
    const passwordRef = useRef()

    const [userName, setUserName] = useState('')
    const [userNameError, setUserNameError] = useState('')    
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')

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

    const handleChange = (value, field) => {
        if(field === 'username') {
            if(Constants.USERNAME_REGEX.test(value)){
                setUserName(value)
                setUserNameError('')
            } else {
                setUserNameError(Constants.USERNAME_INVALID_ERROR)
            }
        } else {
            setPassword(value)
            setPasswordError('')
        }
    }

    const clearAllErrors = () => {
        setUserNameError('')
        setPasswordError('')
    }

    const handleSignIn = () => {
        clearAllErrors()
        if(userName){
            setUserNameError('')
            if(password){
                setPasswordError('')                
            } else {
                setPasswordError(Constants.PASSWORD_EMPTY_ERROR)
                focusOnField('password-input', passwordRef)
            }
        } else {
            setUserNameError(Constants.USERNAME_EMPTY_ERROR)
            focusOnField('username-input', usernameRef)
        }
    }

    const HeaderButtons = () => {
        return (
            <RowWrapper>                
                <HeaderButtonWrapper rightMargin>
                    <Button onClick={() => redirectToLink('home')} onKeyPress={() => redirectToLink('home')}>{Constants.HOME}</Button>
                </HeaderButtonWrapper>
                <HeaderButtonWrapper>
                    <Button onClick={() => redirectToLink('signUp')} onKeyPress={() => redirectToLink('signUp')}>{Constants.SIGN_UP}</Button>
                </HeaderButtonWrapper>
            </RowWrapper>
        )
    }
    
    const SignInForm = (
        <FormWrapper>
            <Center><H2>{Constants.SIGN_IN_HEADING}</H2></Center>
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
                    validationRegex={Constants.USERNAME_REGEX}
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
                    <Button onClick={handleSignIn} onKeyPress={handleSignIn}>{Constants.SIGN_IN}</Button>
                </HeaderButtonWrapper>
                <TextButton role='button'>{Constants.FORGOT_PASSWORD}</TextButton>
            </ColumnWrapper>
        </FormWrapper>
    )

    return (
        <PageWrapper>
            <HeaderButtons/>
            {SignInForm}
        </PageWrapper>
    )
}

export default SignIn