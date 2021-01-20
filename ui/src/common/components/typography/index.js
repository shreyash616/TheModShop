import styled from 'styled-components'
import styleVars from '../../../common/global-styles/styles'

export const H1 = styled.h1`
    font-weight: 100;
`
export const H2 = styled.h2`
    font-weight: normal;
`
export const H3 = styled.h3`
    font-weight: lighter;
`
export const P = styled.p`
    font-weight: normal;
    color: ${props => props.color || styleVars.colors.white};
    font-size: ${styleVars.spacing.spacing14};
    font-weight: bold;
    margin-top: ${styleVars.spacing.spacing8};
`