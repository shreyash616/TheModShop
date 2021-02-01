import React from 'react'
import {    
    StyledSelectWrapper,
    StyledSelect,
    StyledOption
} from './styles'

const Dropdown = (props) => {

    return <StyledSelectWrapper>
        <StyledSelect
            id={props.id}
        >
            {props.items.map((item, i) => {
                return <StyledOption value={item} key={`item-${i+1}`}>{item}</StyledOption>
            })}
        </StyledSelect>
    </StyledSelectWrapper>
}

Dropdown.defaultProps = {
    items: []
}

export default Dropdown