import styled from 'styled-components'
import styleVars from '../../global-styles/styles'

const {
    spacing: {
        spacing2,
        spacing8,
        spacing12,
        spacing16
    },
    colors: {
        themeColor,
        themeBackground
    }
} = styleVars

export const CustomButton = styled.button`
    display: block;
    padding-top: ${spacing12};
    padding-bottom: ${spacing12};
    padding-left: ${spacing8};
    padding-right: ${spacing8};
    background: ${props => props.switch ? themeColor : themeBackground};
    border: ${props => props.noBorder ? '0px' : `${spacing2} solid ${themeColor}`};
    border-top: ${props => props.noBorder ? '0px' : `${spacing2} solid ${themeColor}`};
    border-radius: 5px;
    outline: none;
    text-align: center;
    box-sizing: border-box;
    color: ${props => props.switch ? styleVars.colors.themeBackground : styleVars.colors.themeColor};
    font-size: ${spacing16};      
    font-family: ${styleVars.fonts.globalFont};
    font-weight: 300;
    &:hover{
        cursor: pointer;                
    }   
`