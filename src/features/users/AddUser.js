import TextField from '../../components/TextField'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { addUser } from './userSlice'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';

const AddUser = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [values, setValues] = useState({
    name: "",
    email: ""
  })

  const handleAddUser = () => {
    console.log(values)
    dispatch(addUser({
      id: uuidv4(),
      name: values.name,
      email: values.email
    }))
    setValues({
        name: "",
        email: ""
    })
    navigate('/')
  }
  
  return (
    <div className="mt-10 max-w-xl mx-auto">
        <TextField 
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            value={values.name} 
            label="Name" 
            inputProps={{type: "text", placeholder: "John Doe"}}
        />
        <br />
        <TextField 
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            value={values.email} 
            label="Eamil" 
            inputProps={{type: "text", placeholder: "john@gmail.com"}}
        />
        <Button onClick={handleAddUser}>
            Submit
        </Button>
    </div>
  )
}

export default AddUser