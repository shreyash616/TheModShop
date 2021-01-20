import React from 'react'

import Button from '../../../common/components/button'

import Constants from '../../../common/constants/signInConstants'

import {
    PageWrapper,
    RowWrapper,
    HeaderButtonWrapper
} from './styles'

const SignUp = (props) => {

    const redirectToLink = (link) => {        
        setTimeout(() => {
            props.history.push('/'+link)
        }, 500)
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

    return (
        <PageWrapper>
            <HeaderButtons/>            
        </PageWrapper>
    )
}

export default SignUp