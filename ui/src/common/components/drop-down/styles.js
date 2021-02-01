import styled from 'styled-components'
import styleVars from '../../global-styles/styles'

export const StyledSelectWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
export const StyledSelect = styled.select`
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
    option {
        background: black;
        padding-top: ${styleVars.spacing.spacing50};
        padding-bottom: ${styleVars.spacing.spacing50};
    }
`

export const StyledOption = styled.option`
`