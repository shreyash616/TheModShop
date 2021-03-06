import styled from 'styled-components'
import styleVars from '../../../common/global-styles/styles'

export const H1 = styled.h1`
    font-weight: 100;
    font-size: ${props => props.xl ? '60px' : ''};
    color: ${props => props.dark ? styleVars.colors.themeBackground : styleVars.colors.themeColor};
`
export const H2 = styled.h2`
    font-weight: normal;
    font-size: ${props => props.xl ? '30px' : ''};
    color: ${props => props.dark ? styleVars.colors.themeBackground : styleVars.colors.themeColor};
`
export const H3 = styled.h3`
    font-weight: lighter;
    color: ${props => props.dark ? styleVars.colors.themeBackground : styleVars.colors.themeColor};
`
export const P = styled.p`
    font-weight: normal;
    color: ${props => props.color || styleVars.colors.primaryTextColor};
    font-size: ${styleVars.spacing.spacing16};    
    margin-top: ${styleVars.spacing.spacing8};
    line-height: ${props => props.lessLineHeight?'1em':'1.5em'};
`