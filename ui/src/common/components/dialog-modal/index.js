import {H1} from '../typography'

import styleVars from '../../global-styles/styles'

import {
    BlockingWrapper,
    ModalWrapper,
    ModalHeader,
    ModalBody,
    ModalFooter,
    TitleWrapper,
    CloseIconWrapper,
    SVG
} from './styles'

const DialogModal = (props) => {

    return props.showModal && <BlockingWrapper>
        <ModalWrapper showModal={props.showModal}>
            <ModalHeader>
                <TitleWrapper>
                    <H1>{props.title}</H1>
                </TitleWrapper>
                <CloseIconWrapper>                    
                <SVG tabIndex={0} onClick={props.closeModal} onKeyPress={props.closeModal} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d={styleVars.icons.cross} fill='white'/></SVG>
                </CloseIconWrapper>                
            </ModalHeader>

            <ModalBody>

            </ModalBody>

            <ModalFooter></ModalFooter>
        </ModalWrapper>
    </BlockingWrapper>
}

export default DialogModal