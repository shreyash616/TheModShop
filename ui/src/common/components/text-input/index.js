import React, {useState} from 'react'

import {P} from '../typography'

import styleVars from '../../global-styles/styles'

import { 
    StyledInputWrapper,
    StyledInput,
    Label,
    PasswordShowButton,
    RowWrapper,
    Suggestion
} from './styles'

const TextInput = (props) => { 
    
    const [showPassword, setShowPassword] = useState(!(props.type === 'password'))

    const handleChange = (e) => {                
        props.onChange && props.onChange(e.target.value)          
    }   

    const triggerShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const showPasswordButton = () => {
        return props.type === 'password' && props.value
    }

    return (        
        <StyledInputWrapper id={props.id}>
            <Label value={props.value} htmlFor={`${props.id}-input`}>{props.label}</Label>
            <RowWrapper>
                <StyledInput
                    id={`${props.id}-input`}
                    value={props.value}
                    onChange={(e) => handleChange(e)}
                    error={props.error}
                    maxLength={props.length || 30}                 
                    type={showPassword?'text':'password'}                       
                />
                {showPasswordButton() && <PasswordShowButton onClick={triggerShowPassword}>{showPassword?'Hide':'Show'}</PasswordShowButton>}
            </RowWrapper>            
            <P lessLineHeight color={styleVars.colors.red}>{props.errorMessage}</P>
            {props.suggestion && <Suggestion>{String(props.suggestion).trim()}</Suggestion>}                        
        </StyledInputWrapper>
    )
}

export default TextInput