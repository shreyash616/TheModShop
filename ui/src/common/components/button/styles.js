import styled from 'styled-components'
import styleVars from '../../global-styles/styles'

const {
    spacing: {
        spacing2,
        spacing12,
        spacing16,       
        spacing20,
        spacing50,
        spacing100
    },
    colors: {
        white
    }
} = styleVars

export const CustomButton = styled.button`
    display: block;
    padding-top: ${spacing12};
    padding-bottom: ${spacing12};
    padding-left: ${spacing20};
    padding-right: ${spacing20};
    background: none;
    border: ${spacing2} solid ${white};
    border-top: ${props => props.noTopBorder?'0px':`${spacing2} solid ${white}`};    
    text-align: center;
    box-sizing: border-box;
    color: ${white};
    font-size: ${spacing16};      
    font-family: ${styleVars.fonts.globalFont};
    outline: none;
    position: relative;
    overflow: hidden;
    &:hover{
        cursor: pointer;
        background: rgb(256,256,256,0.4);        
    }
    &:focus{
        background: rgb(256,256,256,0.4);
    }
    &:after{
        background: none;
    }
    transition: background 0.2s;
    &:active{
        cursor: pointer;
    }
    &:after {
        display: none;
        content: "";
        position: absolute;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.3);
        
        width: ${spacing100};
        height: ${spacing100};
        margin-top: -${spacing50};
        margin-left: -${spacing50};
        
        /* Center the ripple */
        top: 50%;
        left: 50%;
      
        animation: ripple 1s;
        opacity: 0;
      }
    &:focus:not(:active)::after {
        display: block;
    }
      
    @keyframes ripple {
    from {
        opacity: 1;
        transform: scale(0);
    }
    to {
        opacity: 0;
        transform: scale(5);
    }
    }    
`