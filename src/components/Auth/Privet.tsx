import { Login } from './Login'
import { PrivateProps } from './type'

export const Private = ({ isLoggedIn, Component }: PrivateProps) => {
    if (isLoggedIn) {
        return <Component name='ahmed' />
    } else {
        return <Login />
    }
}