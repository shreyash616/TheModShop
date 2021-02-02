import styled from 'styled-components'
import styleVars from '../../global-styles/styles'

export const StyledSelectWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
export const RowWrapper = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
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
export const StyledSelect = styled.input`
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
    &:hover {
        border-bottom: ${styleVars.spacing.spacing2} solid ${props => props.error?styleVars.colors.red:styleVars.colors.oceanBlue};        
        cursor: pointer;
    }
`
export const ArrowButton = styled.svg`    
    position: absolute;
    padding: ${styleVars.spacing.spacing4};
    display: block;    
    right: -${styleVars.spacing.spacing0};
    top: ${styleVars.spacing.spacing14};
    transform: ${props => props.isDropdownActive ? 'scale(2) rotate(180deg) translate(4px, 2px)' : 'scale(2) rotate(0deg)'};
    &:hover {        
        cursor: pointer;
    }
    transition: transform 0.2s linear;    
`
export const ListItemWrapper = styled.div`
    position: relative;
    z-index: 1000;
`
export const ListItem = styled.li`
    display: block;
    outline: none;
    width: 100%;
    background: none;
    font-size: ${styleVars.spacing.spacing16};
    font-family: ${styleVars.fonts.globalFont};
    color: ${styleVars.colors.white};
    padding: ${styleVars.spacing.spacing12};    
    border: none;    
    border-bottom: ${styleVars.spacing.spacing2} solid ${props => props.error?styleVars.colors.red:styleVars.colors.white};
    &:focus {
        border-bottom: ${styleVars.spacing.spacing2} solid ${props => props.error?styleVars.colors.red:styleVars.colors.oceanBlue};
        background-color: rgba(255, 255, 255, 0.3);
    }
    &:hover {
        border-bottom: ${styleVars.spacing.spacing2} solid ${props => props.error?styleVars.colors.red:styleVars.colors.oceanBlue};
        background-color: rgba(255, 255, 255, 0.3);
        cursor: pointer;
    }
`