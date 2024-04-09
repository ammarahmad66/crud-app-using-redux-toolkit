import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const ProtectedRoute = ({children}) => {
    const authenticated = useAuth()
    console.log(authenticated)
    return authenticated ? <div>{children}</div> : <Navigate to="/login" />
}

export default ProtectedRoute