import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const AuthRedirection = ({children}) => {
    const authenticated = useAuth()
    console.log(authenticated)
    return authenticated ? <Navigate to="/" /> : <div>{children}</div>
}

export default AuthRedirection