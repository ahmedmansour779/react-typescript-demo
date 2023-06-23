import { HeadingProps } from "./personProps"

export const Heading = (props: HeadingProps) => {
    return <h2>{props.children}</h2>
}