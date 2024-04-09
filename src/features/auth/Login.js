import TextField from '../../components/TextField'
import Button from '../../components/Button'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCurrentUser } from './authSlice'

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [values, setValues] = useState({
        email: "",
        password: "",
    })

    const handleLogin = async () => {
        console.log(values);
        dispatch(setCurrentUser({
            email: values.email,
            password: values.password
        }))
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
        <Link to="/sign-up">Don't have an account? Sign Up</Link>
    </div>
  )
};

export default Login