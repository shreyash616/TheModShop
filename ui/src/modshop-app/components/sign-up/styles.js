import styled from 'styled-components'
import styleVars from '../../../common/global-styles/styles'

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${styleVars.spacing.spacing20};
    min-height: 100vh;      
    border-radius: 10px;
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
export const RowWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: ${props => props.moreTopMargin?styleVars.spacing.spacing20:''};
    @media ${styleVars.breakpoints.tabletLandscape}, ${styleVars.breakpoints.tabletPortrait} { 
        flex-direction: row;       
        margin-left: ${props => props.noLeftAlign?'':'auto'};        
    }
`