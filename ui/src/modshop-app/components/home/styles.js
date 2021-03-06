import styled from 'styled-components'
import styleVars from '../../../common/global-styles/styles'

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;    
    text-align: center;
    width: 100%;
`
export const Section = styled.div`
    display: flex;
    flex-direction: row;
    height: 400px;
    background-color: ${props => props.switch ? styleVars.colors.themeBackground : styleVars.colors.themeColor};
    width: 100%;    
`
export const Division = styled.div`
    width: 50%;     
    margin-top: auto;
    margin-bottom: auto;
    padding: ${styleVars.spacing.spacing32};    
`
export const CustomLink = styled.span`
    text-decoration: underline;
    &:hover {
        cursor: pointer;
    }
`