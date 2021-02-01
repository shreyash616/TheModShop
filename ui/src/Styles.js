import styled from 'styled-components'
import styleVals from './common/global-styles/styles'
import BackgroundImage from './common/backgrounds/background2.jpg'

const {
    colors: {
        white
    }
} = styleVals

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: url(${BackgroundImage});
    background-repeat: no-repeat;
    background-size: cover;   
    min-height: 100vh;
    font-family: ${styleVals.fonts.globalFont};
    color: ${white}; 
    overflow: hidden;   
`
export const Backdrop = styled.div`
    background: rgb(0,0,0,0.85);
`
export const BottomSeparator = styled.div`
    padding: 70px;
    @media ${styleVals.breakpoints.tabletPortrait}, ${styleVals.breakpoints.tabletLandscape} {
        padding: ${styleVals.spacing.spacing0};
    }
`