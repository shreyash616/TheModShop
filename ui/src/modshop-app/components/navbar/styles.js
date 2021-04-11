import styled from 'styled-components'
import styleVars from '../../../common/global-styles/styles'

export const NavbarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: ${styleVars.spacing.spacing16};
    position: fixed;
    top: 0;
    overflow: hidden;
    background: ${styleVars.colors.themeBackground};   
    -webkit-box-shadow: 0px 1px 9px 1px ${styleVars.colors.black};  
    -moz-box-shadow:    0px 1px 9px 1px ${styleVars.colors.black};  
    box-shadow:         0px 1px 9px 1px ${styleVars.colors.black};  
`

export const RowWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: auto;
    @media ${styleVars.breakpoints.tabletLandscape}, ${styleVars.breakpoints.tabletPortrait} {         
        margin-left: ${props => props.right ? 'auto' : ''};
        margin-right: ${props => props.left ? 'auto' : ''};
    }
`
export const HeaderButtonWrapper = styled.div`     
    button {        
        display: none;                
        @media ${styleVars.breakpoints.tabletLandscape}, ${styleVars.breakpoints.tabletPortrait} {
            margin-right: ${props => props.rightMargin?styleVars.spacing.spacing16:''};            
            width: 200px;
            display: block;
        }     
    }
`
export const SignOutText = styled.span`
    display: inline-block;
    margin-top: 30px;
`
