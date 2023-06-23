import { useState } from 'react'
import { AuthUser } from './StateType'

export const User = () => {
    // ? you can replace "null" to "{} as AuthUser" in this state return undefined
    const [user, setUser] = useState<AuthUser | null>(null)
    const handleLogin = () => {
        setUser({
            name: 'ahmed',
            email: 'ahmed@example.com'
        })
    }
    const handleLogout = () => {
        setUser(null)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>{user === null ? "Hello" : `User name is ${user?.name} and your email is ${user?.email}`}</div>
        </div>
    )
}