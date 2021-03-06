import styled from 'styled-components'
import styleVars from '../../global-styles/styles'

export const AlertWrapper = styled.div`
    display: flex;
    flex-direction: row;    
    padding: ${styleVars.spacing.spacing8} ${styleVars.spacing.spacing8} ${styleVars.spacing.spacing4} ${styleVars.spacing.spacing8};
    width: 100%;
    background: ${props => props.reason === 'error'?styleVars.colors.red:styleVars.colors.themeColor};    
    border-radius: 2px;
`

export const AlertContent = styled.div`
    margin-right: auto;
    width: 90%;
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
    transform: scale(1.2);
    margin-top: ${styleVars.spacing.spacing0};
`