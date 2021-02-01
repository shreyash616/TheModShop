import {H1} from '../typography'
import Button from '../button'

import styleVars from '../../global-styles/styles'

import {
    BlockingWrapper,
    ModalWrapper,
    ModalHeader,
    ModalBody,
    ModalFooter,
    TitleWrapper,
    CloseIconWrapper,
    SVG,
    DialogModalButtonWrapper
} from './styles'

const DialogModal = (props) => {

    return props.showModal && <BlockingWrapper>
        <ModalWrapper role='modal' showModal={props.showModal}>
            {props.showTitle && <ModalHeader>
                <TitleWrapper>
                    <H1>{props.title}</H1>
                </TitleWrapper>
                <CloseIconWrapper>                    
                <SVG tabIndex={0} onClick={props.closeModal} onKeyPress={props.closeModal} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d={styleVars.icons.cross} fill='white'/></SVG>
                </CloseIconWrapper>                
            </ModalHeader>}
            <ModalBody>
                {props.children}
            </ModalBody>
            {props.showPrimaryButton && 
            <ModalFooter>                
                {props.showSecondaryButton && <DialogModalButtonWrapper><Button onClick={props.onSecondaryButtonClick}>{props.secondaryButtonText}</Button></DialogModalButtonWrapper>}
                {props.showPrimaryButton && <DialogModalButtonWrapper rightButton><Button onClick={props.onPrimaryButtonClick}>{props.primaryButtonText}</Button></DialogModalButtonWrapper>}
            </ModalFooter>}
        </ModalWrapper>
    </BlockingWrapper>
}

export default DialogModal