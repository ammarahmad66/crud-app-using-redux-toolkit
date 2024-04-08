import TextField from '../../components/TextField'
import Button from '../../components/Button'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editUser } from './userSlice'

const EditUser = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {id} = useParams()
    const users = useSelector(state => state.users)
    const user = users.find(user => user.id === id)
    const [values, setValues] = useState({
      name: user.name,
      email: user.email
    })
  
    const handleEditUser = () => {
      console.log(values)
      dispatch(editUser({
        id,
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
          <Button onClick={handleEditUser}>
              Edit
          </Button>
      </div>
    )}

export default EditUser