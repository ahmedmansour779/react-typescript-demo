export type Name = {
    first: string,
    last: string
}
export type PersonProps = {
    name: Name
}
export type PersonListProps = {
    names: Name[]
}

export type InputProps = {
    value?: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export type StatusProps = {
    status: 'loading' | 'success' | 'error'
}

export type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void,
}
export type ButtonHandles = {
    handleButton: () => void,
}

export type ContainerProps = {
    styles: React.CSSProperties,
}

export type GreetProps = {
    name: string,
    numMsgs?: number,
    isLoggedIn: boolean,
}

export type HeadingProps = {
    children: string
}

export type OscarProps = {
    children: React.ReactNode
}
