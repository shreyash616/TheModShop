import styled from 'styled-components'
import styleVars from '../../../common/global-styles/styles'

export const BlockingWrapper = styled.div`    
    background-color: rgba(0,0,0,0.6);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    text-align: initial;
`

export const ModalWrapper = styled.div`
    background-color: ${styleVars.colors.matteBlack};    
    display: flex;
    flex-direction: column;
    margin: auto;    
    padding: ${styleVars.spacing.spacing16};    
    border-radius: 10px;
    min-height: 200px;
    animation: ${props => props.showModal?'showUp 0.5s ease-out':'disappear 0.5s ease-out'};     
    @keyframes showUp {
        from {
            opacity: 0;            
            transform: translate(0%, 10%);                         
        }
        to {
            opacity: 1;                    
            transform: translate(0%, 0%);                         
        }
    }
    @keyframes disappear {
        from {
            opacity: 1;            
            transform: translate(0%, 0%);                         
        }
        to {
            opacity: 0;                    
            transform: translate(0%, -10%);                         
        }
    }
`

export const ModalHeader = styled.div`
    display: flex;
    flex-direction: row;    
    height: 40px;
    width: 370px;
    margin-bottom: ${styleVars.spacing.spacing32};
    padding-left: ${styleVars.spacing.spacing8};
    padding-right: ${styleVars.spacing.spacing8};    
    @media ${styleVars.breakpoints.tabletPortrait}, ${styleVars.breakpoints.tabletLandscape} {
        min-width: 400px;
    }    
`
export const ModalBody = styled.div`
    display: flex;
    min-height: 20px;
    width: 370px;
    padding: ${styleVars.spacing.spacing8};
    @media ${styleVars.breakpoints.tabletPortrait}, ${styleVars.breakpoints.tabletLandscape} {
        min-width: 400px;
    }
    margin-bottom: ${styleVars.spacing.spacing16};
`
export const ModalFooter = styled.div`
    display: flex;
    flex-direction: row;
    height: auto;
    width: 370px;
    padding-left: ${styleVars.spacing.spacing8};
    padding-right: ${styleVars.spacing.spacing8};
    margin-top: auto;
    @media ${styleVars.breakpoints.tabletPortrait}, ${styleVars.breakpoints.tabletLandscape} {
        min-width: 400px;
    }
`
export const TitleWrapper = styled.div`    
    margin-right: auto;
    margin-bottom -${styleVars.spacing.spacing12};       
    border-bottom: ${styleVars.spacing.spacing2} solid ${styleVars.colors.white};
    h1 {        
        margin: ${styleVars.spacing.spacing0};        
    }
`
export const CloseIconWrapper = styled.div`
    margin-left: auto;
    &:hover {
        transform: scale(1.1);
        cursor: pointer;        
    }
    transition: all 0.2s;
`
export const SVG = styled.svg`    
    transform: scale(1.5);
    margin-top: ${styleVars.spacing.spacing14};
`
export const DialogModalButtonWrapper = styled.div`
    button {
        width: ${styleVars.spacing.spacing100};
    }
    margin-left: ${props => props.rightButton && 'auto'};
`