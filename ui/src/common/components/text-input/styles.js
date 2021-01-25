import styled from 'styled-components'
import styleVars from '../../../common/global-styles/styles'
import Button from '../../../common/components/button'

export const StyledInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
export const RowWrapper = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
`
export const StyledInput = styled.input`
    display: block;
    outline: none;
    width: 100%;
    background: none;
    font-size: ${styleVars.spacing.spacing16};
    font-family: ${styleVars.fonts.globalFont};
    color: ${styleVars.colors.white};
    padding-top: ${styleVars.spacing.spacing12};
    padding-bottom: ${styleVars.spacing.spacing12};
    border: none;    
    border-bottom: ${styleVars.spacing.spacing2} solid ${props => props.error?styleVars.colors.red:styleVars.colors.white};
    &:focus {
        border-bottom: ${styleVars.spacing.spacing2} solid ${props => props.error?styleVars.colors.red:styleVars.colors.oceanBlue};
    }
`
export const Label = styled.label`    
    margin-bottom: ${styleVars.spacing.spacing0};
    margin-left: 1px;  
    color: solid ${styleVars.colors.white};   
    @media ${styleVars.breakpoints.tabletLandscape}, ${styleVars.breakpoints.tabletPortrait} {
        margin-left: ${styleVars.spacing.spacing2};
    }
    transform: ${props => !props.value && 'translate(0px, 32px)'};    
    transition: all 0.5s;
`
export const PasswordShowButton = styled(Button)`    
    position: absolute;
    padding: ${styleVars.spacing.spacing4};
    display: block;    
    right: -${styleVars.spacing.spacing0};
    top: ${styleVars.spacing.spacing12};
    font-family: ${styleVars.fonts.globalFont};
    background: none;    
    border: none;
    outline: none;
    &: focus {
        border: none;
    }
    &: after {
        background: none;
    }
    &: hover {
        background: none;
    }
    
`