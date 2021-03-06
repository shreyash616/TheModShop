import styled from 'styled-components'
import styleVars from '../../../common/global-styles/styles'

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;     
    margin-top: ${styleVars.spacing.spacing100};         
`
export const HeaderButtonWrapper = styled.div`  
    @media ${styleVars.breakpoints.tabletLandscape}, ${styleVars.breakpoints.tabletPortrait} {
        margin-right: ${props => props.leftAlign?'auto':styleVars.spacing.spacing0};
        margin-left: ${props => props.rightAlign?'auto':styleVars.spacing.spacing0};        
    }    
    button {
        margin-bottom: ${styleVars.spacing.spacing12};
        width: 100%;                
        @media ${styleVars.breakpoints.tabletLandscape}, ${styleVars.breakpoints.tabletPortrait} {
            margin-right: ${props => props.rightMargin?styleVars.spacing.spacing16:''};            
            width: ${props => props.fullWidth?'100%':'200px'};
        }        
    }
`
export const ColumnWrapper = styled.div`
    margin-top: ${styleVars.spacing.spacing16};
    text-align: center;
`
export const TextButton = styled.span`
    display: inline-block;
    color: ${styleVars.colors.primaryTextColor};
    font-size: ${styleVars.spacing.spacing14};
    font-family: ${styleVars.fonts.globalFont};
    margin-top: ${styleVars.spacing.spacing12};
    margin-bottom: ${styleVars.spacing.spacing16};
    &:hover{
        text-decoration: underline;
        cursor: pointer;
    }        
`
export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;    
    padding: ${styleVars.spacing.spacing20};
    margin-left: auto;
    margin-right: auto;    
    width: 100%;
    min-height: 420px;
    border: ${styleVars.spacing.spacing2} solid ${styleVars.colors.primaryTextColor};
    animation: showUp 0.5s ease-out;     
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
    @media ${styleVars.breakpoints.tabletLandscape}, ${styleVars.breakpoints.tabletPortrait} {
        width: 500px;
    }
`
export const InputWrapper = styled.div`
    width: auto;
    margin-bottom: ${styleVars.spacing.spacing12};    
`
export const Center = styled.div`
    text-align: center;
`

export const AlertWrapper = styled.div`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: ${styleVars.spacing.spacing12};
    @media ${styleVars.breakpoints.tabletLandscape}, ${styleVars.breakpoints.tabletPortrait} {
        width: 500px;
    }
`