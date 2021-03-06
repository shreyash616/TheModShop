import styled from 'styled-components'
import styleVars from './common/global-styles/styles'

const {
    colors: {
        primaryTextColor,
        themeBackground
    }
} = styleVars

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: ${styleVars.fonts.globalFont};
    color: ${primaryTextColor};       
`
export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;    
    padding-top: ${styleVars.spacing.spacing50};    
    background: ${styleVars.colors.themeBackground};
`
export const Footer = styled.footer`
    display: flex;
    flex-direction: row;
    width: 100%;
    color: ${themeBackground};
    height: ${styleVars.spacing.spacing100};
    padding: ${styleVars.spacing.spacing28};
    margin-top: auto;        
    background: ${styleVars.colors.themeColor};
    -webkit-box-shadow: 0px 0px 3px 1px ${styleVars.colors.themeBackground};  
    -moz-box-shadow:    0px 0px 3px 1px ${styleVars.colors.themeBackground};  
    box-shadow:         0px 0px 3px 1px ${styleVars.colors.themeBackground}; 
    position: relative;
`