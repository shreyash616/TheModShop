import styled from 'styled-components'
import styleVars from '../../../common/global-styles/styles'

export const BlockingWrapper = styled.div`    
    background-color: rgba(0,0,0,0.9);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex; 
`

export const ModalWrapper = styled.div`
    background-color: ${styleVars.colors.matteBlack};    
    display: inline-block;
    margin: auto;    
    padding: ${styleVars.spacing.spacing16};    
    border-radius: 10px;
    min-height: 600px;
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
    display: block;    
    height: 40px;
    min-width: 270px;
    padding-left: ${styleVars.spacing.spacing8};
    padding-right: ${styleVars.spacing.spacing8};    
    @media ${styleVars.breakpoints.tabletPortrait}, ${styleVars.breakpoints.tabletLandscape} {
        min-width: 400px;
    }
`
export const ModalBody = styled.div`
    min-height: 80px;
    min-width: 270px;
    padding: ${styleVars.spacing.spacing8};
    @media ${styleVars.breakpoints.tabletPortrait}, ${styleVars.breakpoints.tabletLandscape} {
        min-width: 400px;
    }
`
export const ModalFooter = styled.div`
    height: 80px;
    min-width: 270px;
    padding: ${styleVars.spacing.spacing8};
    @media ${styleVars.breakpoints.tabletPortrait}, ${styleVars.breakpoints.tabletLandscape} {
        min-width: 400px;
    }
`
export const TitleWrapper = styled.div`    
    float: left;
    padding-bottom: ${styleVars.spacing.spacing8};
    border-bottom: ${styleVars.spacing.spacing2} solid ${styleVars.colors.white};
    h1 {
        margin: ${styleVars.spacing.spacing0};        
    }
`
export const CloseIconWrapper = styled.div`
    float: right;
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