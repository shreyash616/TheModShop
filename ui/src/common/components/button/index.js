import {
    CustomButton
} from './styles'

const Button = (props) => {
    return <CustomButton {...props}>{props.children}</CustomButton>
}

export default Button