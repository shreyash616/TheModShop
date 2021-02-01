import React, { useEffect, useState } from 'react'
import Button from '../../../common/components/button'
import DialogModal from '../../../common/components/dialog-modal'
import Constants from '../../../common/constants/homeConstants'
import {H1, H3, P} from '../../../common/components/typography'

import styleVars from '../../../common/global-styles/styles'

import 
    { 
        PageWrapper,        
        PageHeadingWrapper,
        HorizontalSeparator,
        VerticalSeparator,
        Circle,             
        ButtonWrapper,
        HeaderButtonWrapper,
        RowWrapper,
        AnimationWrapper,
        SVG,
        SignOutText
    } from './styles'
import { connect } from 'react-redux'
import { getKeyValue } from '../../../common/utils/utils'

const mapStateToProps = store => ({
    signInData: store.signIn
})

const Home = (props) => {

    const [showInfoModal, setShowInfoModal] = useState(false)
    const [showSignOutModal, setShowSignOutModal] = useState(false)
    const [modalContent, setModalContent] = useState({
        title: '',
        content: ''
    })

    useEffect(()=>{
        !showInfoModal && setModalContent({
            title: '',
            content: ''            
        })
    }, [showInfoModal])

    useEffect(()=>{
        modalContent.title && setShowInfoModal(true)
    }, [modalContent])

    const redirectToLink = (link) => {        
        setTimeout(() => {
            props.history.push('/'+link)
        }, 500)
    }

    const handleSignOut = () => {
        props.actions.initiateSignOut()
        setShowSignOutModal(false)
    }

    const HeaderButtons = () => {
        const signInStatus = getKeyValue(['signInData', 'status'], props) === 'success'
        return (
            !signInStatus
            ? <RowWrapper>
                <HeaderButtonWrapper rightMargin>
                    <Button onClick={() => redirectToLink('signUp')} onKeyPress={() => redirectToLink('signUp')}>{Constants.SIGN_UP}</Button>
                </HeaderButtonWrapper>
                <HeaderButtonWrapper>
                    <Button onClick={() => redirectToLink('signIn')} onKeyPress={() => redirectToLink('signIn')}>{Constants.SIGN_IN}</Button>
                </HeaderButtonWrapper>
              </RowWrapper>
            : <RowWrapper>                
                <HeaderButtonWrapper>
                    <Button onClick={() => setShowSignOutModal(true)} onKeyPress={() => setShowSignOutModal(true)}>{Constants.SIGN_OUT}</Button>
                </HeaderButtonWrapper>
              </RowWrapper>
        )
    }

    const BrandSection = () => {
        return (
            <React.Fragment>
                <Circle><SVG xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24"><path d={styleVars.icons.android} fill='white'/></SVG></Circle>
                <VerticalSeparator/>
                <HorizontalSeparator/>
                <H1>{Constants.HEADING}</H1>
                <H3>{Constants.SUBHEADING}</H3>
                <HorizontalSeparator withTopMargin noBottomMargin/>
            </React.Fragment>
        )
    }

    const retrieveModalContent = (key) => {        
        setModalContent({
            ...modalContent,
            title: Constants[key.toUpperCase()]['TITLE'],
            content: Constants[key.toUpperCase()]['CONTENT']
        })        
    }

    const HomeButtons = () => {
        return (
        <React.Fragment>
            <VerticalSeparator height={'40px'}/>                
            <ButtonWrapper>
                <Button onClick={() => retrieveModalContent(Constants.ABOUT_KEY)}>{Constants.UNDER_THE_HOOD_LABEL}</Button>
            </ButtonWrapper>
            {/* <VerticalSeparator height={'40px'}/> */}
            <ButtonWrapper hideTopBorder>
                <Button onClick={() => retrieveModalContent(Constants.EXPERIENCE_KEY)}>{Constants.EXPERIENCE_LABEL}</Button>
            </ButtonWrapper>
            {/* <VerticalSeparator height={'40px'}/> */}
            <ButtonWrapper hideTopBorder>
                <Button onClick={() => retrieveModalContent(Constants.DEVICES_KEY)}>{Constants.DEVICES_SUPPORT_LABEL}</Button>
            </ButtonWrapper>
        </React.Fragment>)
    }

    const closeModal = () => {
        setShowInfoModal(false)
    }

    const closeSignOutModal = () => {
        setShowSignOutModal(false)
    }

    const InfoModal = () => {
        return (
            <DialogModal
                title={modalContent.title}
                showModal={showInfoModal}
                closeModal={closeModal}                                
                showTitle                              
            >
                <P>{modalContent.content}</P>                             
            </DialogModal>)
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
    
    return (
        <PageWrapper>            
            <HeaderButtons/>            
            <AnimationWrapper>
                <PageHeadingWrapper>
                    <BrandSection/>
                    <HomeButtons/>       
                </PageHeadingWrapper>   
            </AnimationWrapper>
            <InfoModal/>
            <SignOutModal/>
        </PageWrapper>
    )

}

export default connect(mapStateToProps, null)(Home)