import styled from 'styled-components'
import styleVars from '../../../common/global-styles/styles'

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${styleVars.spacing.spacing20};
    min-height: 100vh;
    text-align: center;
`
export const AnimationWrapper = styled.div`
    animation: showUp 0.5s ease-out;     
    @keyframes showUp {
        from {
            opacity: 0;            
            transform: translate(0%, 10%);             
        }
        to {
            opacity: 1;                    
            transform: translate(0%, 0%);            
        }
    }
`
export const PageHeadingWrapper = styled.div`
    margin-top: 100px;   
`
export const SVG = styled.svg`
    position: relative;          
    display: inline-block;                     
    transform: translate(-50%,-50%);
`
export const Circle = styled.div`
    text-align: center;    
    border: ${styleVars.spacing.spacing2} solid ${styleVars.colors.white};
    padding: ${styleVars.spacing.spacing50};    
    margin-left: auto;
    margin-right: auto;
    width: 50px;
    height: 50px;
    border-radius: 50%;
`
export const VerticalSeparator = styled.div`
    border-left: ${styleVars.spacing.spacing2} solid ${styleVars.colors.white};
    height: ${props => props.height || '80px'};
    margin-left: 50%;
`
export const HorizontalSeparator = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: auto;            
    border-bottom: ${styleVars.spacing.spacing2} solid ${styleVars.colors.white};
    margin-bottom: ${props => props.noBottomMargin?'':styleVars.spacing.spacing50};
    margin-top: ${props => props.withTopMargin? styleVars.spacing.spacing50: ''};
    @media ${styleVars.breakpoints.tabletLandscape} {
        width: 1008px;
    }
`
export const ButtonWrapper = styled.div`    
    button {        
        width: 300px;                                             
        margin-left: auto;
        margin-right: auto;
        border-top: ${props => props.hideTopBorder && 'none'};
    }       
`
export const RowWrapper = styled.div`
    display: flex;
    flex-direction: column;    
    @media ${styleVars.breakpoints.tabletLandscape}, ${styleVars.breakpoints.tabletPortrait} { 
        flex-direction: row;       
        margin-left: ${props => props.noLeftAlign?'':'auto'};
    }
`
export const HeaderButtonWrapper = styled.div`    
    button {
        margin-bottom: ${styleVars.spacing.spacing12};
        width: 100%;                
        @media ${styleVars.breakpoints.tabletLandscape}, ${styleVars.breakpoints.tabletPortrait} {
            margin-right: ${props => props.rightMargin?styleVars.spacing.spacing16:''};            
            width: 200px;
        }      
    }
`

export const SignOutText = styled.span`
    display: inline-block;
    margin-top: 30px;
`
