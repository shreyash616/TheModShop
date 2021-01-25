import React from 'react'

import styleVars from '../../global-styles/styles'
import { 
    AlertContent,
    AlertWrapper,
    CloseIconWrapper,
    SVG 
} from './styles'

const Alert = (props) => {

    return <AlertWrapper {...props}>
        <AlertContent>
            {props.children}
        </AlertContent>
        <CloseIconWrapper>
        <SVG tabIndex={0} onClick={props.closeAlert} onKeyPress={props.closeAlert} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d={styleVars.icons.cross} fill='white'/></SVG>
        </CloseIconWrapper>
    </AlertWrapper>
}

Alert.defaultProps = {
    reason: 'info'
}

export default Alert