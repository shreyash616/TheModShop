import React, { useState } from 'react'
import styleVars from '../../global-styles/styles'
import {    
    StyledSelectWrapper,
    StyledSelect, 
    ListItemWrapper,   
    ListItem,
    RowWrapper,
    ArrowButton,
    Label
} from './styles'

const Dropdown = (props) => {

    const [isDropdownActive, setIsDropdownActive] = useState(false)
    const [dropdownValue, setDropdownValue] = useState('')

    const triggerDropDown = (e) => {                        
        [13, undefined].includes(e.charCode) && setIsDropdownActive(!isDropdownActive)        
    }

    const searchAndSetDropdownValue = (value) => {
        value = String(value)[String(value).length - 1]        
        if(props.items.length > 0) {
            for(let i = 0; i<props.items.length; i++){
                if(String(props.items[i]).includes(value)){
                    console.log(props.items[i])
                    setDropdownValue(props.items[i])
                    break;
                }
            }
        }
    }

    const handleListClick = (e, value) => {
        if([13, undefined].includes(e.charCode)){
            setDropdownValue(value)
            setIsDropdownActive(false)
        }
    }

    return <StyledSelectWrapper>
        <Label value={dropdownValue} htmlFor={`${props.id}-dropdown`}>{props.label}</Label>
        <RowWrapper>
        <StyledSelect
            id={`${props.id}-dropdown`}
            aria-label={props.ariaLabel}
            aria-haspopup='listbox'
            aria-expanded='false'
            onClick={e => triggerDropDown(e)}
            onKeyPress={e => triggerDropDown(e)}
            value={dropdownValue}
            onChange={(e) => searchAndSetDropdownValue(e.target.value)}            
        />
        <ArrowButton onClick={e => triggerDropDown(e)} onKeyPress={e => triggerDropDown(e)} isDropdownActive={isDropdownActive} width="24" height="24" viewBox="0 0 24 24"><path role='button' tabIndex={0} onClick={e => triggerDropDown(e)} onKeyPress={e => triggerDropDown(e)} d={styleVars.icons.downArrow} fill='white'/></ArrowButton>
        </RowWrapper>
        <ListItemWrapper>
        {isDropdownActive && props.items.map((item, i) => {
            return <ListItem key={`${props.id}-item-${i+1}`} onClick={(e) => handleListClick(e, item)}>{item}</ListItem>
        })}        
        </ListItemWrapper>
    </StyledSelectWrapper>
}

Dropdown.defaultProps = {
    items: []
}

export default Dropdown