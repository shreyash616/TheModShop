import React, {useState} from 'react'

import Button from '../../../common/components/button'
import DialogModal from '../../../common/components/dialog-modal'
import Constants from '../../../common/constants/homeConstants'

import { connect } from 'react-redux'
import { getKeyValue } from '../../../common/utils/utils'


import  {
    NavbarWrapper,
    RowWrapper,
    HeaderButtonWrapper,
    SignOutText
} from './styles'

const mapStateToProps = store => ({
    signInData: store.signIn
})

const Navbar = props => {

    const currentRoute = getKeyValue(['history', 'location', 'pathname'], props).split('/')[1]

    const [showSignOutModal, setShowSignOutModal] = useState(false)
    
    const buttonProps = {
        home: {
            left: Constants.SIGN_UP,
            leftRoute: 'signUp',
            right: Constants.SIGN_IN,
            rightRoute: 'signIn'
        },
        signIn: {
            left: Constants.HOME,
            leftRoute: 'signUp',
            right: Constants.SIGN_UP,
            rightRoute: 'signUp'
        },
        signUp: {
            left: Constants.HOME,
            leftRoute: 'home',
            right: Constants.SIGN_IN,
            rightRoute: 'signIn'
        }
    }

    const redirectToLink = (e, link) => {        
        [undefined, 13].includes(e.keyCode) && setTimeout(() => {
            props.history.push('/'+link)
        }, 500)
    }

    const handleSignOut = () => {
        props.actions.initiateSignOut()
        setShowSignOutModal(false)
    }

    const closeSignOutModal = () => {
        setShowSignOutModal(false)
    }

    const SignOutModal = () => {
        return (
            <DialogModal                
                showModal={showSignOutModal}
                closeModal={closeSignOutModal}
                primaryButtonText={Constants.YES}
                onPrimaryButtonClick={handleSignOut}                
                secondaryButtonText={Constants.NO}
                onSecondaryButtonClick={closeSignOutModal}
                showPrimaryButton
                showSecondaryButton
            >        
                <SignOutText>{Constants.SIGN_OUT_CONFIRMATION}</SignOutText>
            </DialogModal>)
    }

    const RightHeaderButtons = () => {
        const signInStatus = getKeyValue(['signInData', 'status'], props) === 'success'
        return (
            !signInStatus
            ? <RowWrapper>
                <HeaderButtonWrapper rightMargin>
                    <Button onClick={(e) => redirectToLink(e, buttonProps[currentRoute].leftRoute)} onKeyPress={(e) => redirectToLink(e, buttonProps[currentRoute].leftRoute)}>{getKeyValue([currentRoute, 'left'] ,buttonProps)}</Button>
                </HeaderButtonWrapper>
                <HeaderButtonWrapper>
                    <Button onClick={(e) => redirectToLink(e, buttonProps[currentRoute].rightRoute)} onKeyPress={(e) => redirectToLink(e, buttonProps[currentRoute].rightRoute)}>{getKeyValue([currentRoute, 'right'] ,buttonProps)}</Button>
                </HeaderButtonWrapper>
              </RowWrapper>
            : <RowWrapper>                
                <HeaderButtonWrapper>
                    <Button onClick={() => setShowSignOutModal(true)} onKeyPress={() => setShowSignOutModal(true)}>{Constants.SIGN_OUT}</Button>
                </HeaderButtonWrapper>
              </RowWrapper>
        )
    }

    return (
        <NavbarWrapper>
            <RightHeaderButtons/>
            <SignOutModal/>
        </NavbarWrapper> )
}

export default connect(mapStateToProps, null)(Navbar)