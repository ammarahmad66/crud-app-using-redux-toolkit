import TextField from '../../components/TextField'
import Button from '../../components/Button'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signUpUser } from './authSlice'
import {v4 as uuid} from 'uuid'

const SignUp = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        age: "",
    })

    const handleSignUp = () => {
        console.log(values)
        dispatch(signUpUser({
            id: uuid(),
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
            age: values.age,
        }))
        navigate('/')
    }

  return (
    <div className="mt-10 max-w-xl mx-auto">
        <TextField 
            onChange={(e) => setValues({ ...values, firstName: e.target.value })}
            value={values.firstName} 
            label="First Name" 
            inputProps={{type: "text", placeholder: "John"}}
        />
        <br />
        <TextField 
            onChange={(e) => setValues({ ...values, lastName: e.target.value })}
            value={values.lastName} 
            label="Last Name" 
            inputProps={{type: "text", placeholder: "Doe"}}
        />  
        <br /> 
        <TextField 
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            value={values.email} 
            label="Email" 
            inputProps={{type: "email", placeholder: "john@gmail.com"}}
        />
        <br />
        <TextField 
            onChange={(e) => setValues({ ...values, age: e.target.value })}
            value={values.age} 
            label="Age" 
            inputProps={{type: "number", placeholder: ""}}
        />
        <br />
        <TextField 
            onChange={(e) => setValues({ ...values, password: e.target.value })}
            value={values.password} 
            label="Password" 
            inputProps={{type: "password", placeholder: ""}}
        />
        <Button onClick={handleSignUp}>
            Login
        </Button>
        <Link to="/login">Already have an account? Login</Link>
    </div>
  )
}

export default SignUp