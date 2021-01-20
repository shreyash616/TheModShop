import React, { useEffect, useState } from 'react'

import {P} from '../typography'

import styleVars from '../../global-styles/styles'

import { 
    StyledInputWrapper,
    StyledInput,
    Label
} from './styles'

const TextInput = (props) => {        

    const [placeholder, setPlaceholder] = useState(props.placeholder)   
    const [value, setValue] = useState(props.value)     

    const handleChange = (e) => {                
        props.onChange && props.onChange(e.target.value)    
        if(props.validationRegex instanceof RegExp) {
            if(props.validationRegex.test(e.target.value)){
                setValue(e.target.value)
            }
        } else {
            setValue(e.target.value)
        }   
    }

    useEffect(()=>{        
        if(!props.value){
            setValue(null)
        }
        // eslint-disable-next-line
    }, [])

    useEffect(()=>{        
        !props.value && setTimeout(()=>{
            setPlaceholder(props.placeholder)
        }, 475)
        props.value && setPlaceholder('')
        if(!props.value && value === null) {
            setValue(null)
        }
    }, [props, value])    

    const getAnimationClass = () => {        
        if(value){
            return 'appear-animation'
        } else if(value === '') {
            return 'disappear-animation'
        } else {
            return 'hidden'
        }        
    }    

    return (        
        <StyledInputWrapper id={props.id}>
            <Label className={getAnimationClass()} htmlFor={`${props.id}-input`}>{props.label}</Label>
            <StyledInput
                id={`${props.id}-input`}
                value={props.value === null?'':props.value}
                onChange={(e) => handleChange(e)}
                error={props.error}
                maxLength={props.length}
                placeholder = {placeholder}   
                type={props.type}                       
            />
            {<P color={styleVars.colors.red}>{props.errorMessage}</P>}
        </StyledInputWrapper>
    )
}

export default TextInput