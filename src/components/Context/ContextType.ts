export type ThemeContextProviderProps = {
    children: React.ReactNode
}

export type AuthUser = {
    name: string
    email: string
}

export type UserContextType = {
    user: AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

export type UserContextProviderProps = {
    children: React.ReactNode
}