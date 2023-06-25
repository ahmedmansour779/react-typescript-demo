export type PrivateProps = {
    isLoggedIn: boolean
    Component: React.ComponentType<ProfileProps>
}

export type ProfileProps = {
    name: string
}