import { createContext } from 'react'
import { ThemeContextProviderProps } from './ContextType'
import { theme } from './theme'

export const ThemeContext = createContext(theme)

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}