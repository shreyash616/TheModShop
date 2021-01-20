import styled from 'styled-components'
import styleVars from '../../../common/global-styles/styles'

export const StyledInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
export const StyledInput = styled.input`
    display: block;
    outline: none;
    background: none;
    font-size: ${styleVars.spacing.spacing16};
    font-family: ${styleVars.fonts.globalFont};
    color: ${styleVars.colors.white};
    padding-top: ${styleVars.spacing.spacing12};
    padding-bottom: ${styleVars.spacing.spacing12};
    border: none;    
    border-bottom: ${styleVars.spacing.spacing2} solid ${props => props.error?styleVars.colors.red:styleVars.colors.white};   
    ::-webkit-input-placeholder { /* Edge */
        color: ${styleVars.colors.white};        
      }
      
      :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: ${styleVars.colors.white};        
      }
      
      ::placeholder {
        color: ${styleVars.colors.white};        
      } 
`
export const Label = styled.label`    
    margin-bottom: ${styleVars.spacing.spacing0};
    margin-left: 1px;
    color: solid ${styleVars.colors.white};   
    @media ${styleVars.breakpoints.tabletLandscape}, ${styleVars.breakpoints.tabletPortrait} {
        margin-left: ${styleVars.spacing.spacing2};
    } 
`