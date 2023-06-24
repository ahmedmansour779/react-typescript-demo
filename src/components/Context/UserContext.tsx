import { createContext, useState } from "react"
import { AuthUser, UserContextProviderProps, UserContextType } from "./ContextType"

// export const UserContext = createContext<UserContextType | null>(null)
export const UserContext = createContext({} as UserContextType)

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
    const [user, setUser] = useState<AuthUser | null>(null)
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
} 