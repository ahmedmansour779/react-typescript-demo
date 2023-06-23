import { ContainerProps } from "./personProps"

export const Container = (props: ContainerProps) => {
    return (
        <div style={props.styles}>
            Text content goes here
        </div>
    )
}