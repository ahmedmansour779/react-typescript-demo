import { ButtonHandles, ButtonProps } from "./personProps"

export const ButtonProp = (props: ButtonProps) => {
    return <button onClick={event => props.handleClick(event, 1)}>Click</button>
}

export const ButtonHandel = (props: ButtonHandles) => {
    return <button onClick={props.handleButton}>Click</button>
}