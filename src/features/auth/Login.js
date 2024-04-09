import TextField from '../../components/TextField'
import Button from '../../components/Button'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from './authSlice'

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const [errorMessage, setErrorMessage] = useState("");
    const [values, setValues] = useState({
        email: "",
        password: "",
    })

    const handleLogin = async () => {
        console.log(values);
        dispatch(loginUser({ // Dispatch the action and capture the result
            email: values.email,
            password: values.password
        }))
        if (!isAuthenticated) { // If login fails, display error message
            setErrorMessage("Invalid email or password. Please try again.");
            return;
        }
        navigate('/')
    }

  return (
    <div className="mt-10 max-w-xl mx-auto">
        <TextField 
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            value={values.email} 
            label="Email" 
            inputProps={{type: "email", placeholder: "john@gmail.com"}}
        />
        <br />
        <TextField 
            onChange={(e) => setValues({ ...values, password: e.target.value })}
            value={values.password} 
            label="Password" 
            inputProps={{type: "password", placeholder: ""}}
        />
        <Button onClick={handleLogin}>
            Login
        </Button>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <Link to="/sign-up">Don't have an account? Sign Up</Link>
    </div>
  )
};

export default Login