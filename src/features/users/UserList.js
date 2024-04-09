import React from 'react'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from './userSlice'
import { logout } from '../auth/authSlice'

const UserList = () => {
  const navigate = useNavigate()
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()
  // const users = [
  //   {
  //       id: "1",
  //       name: "John Doe",
  //       email: "john@gamil.com"
  //   },
  //   {
  //       id: "2",
  //       name: "Bob",
  //       email: "bob@gamil.com"
  //   }
  // ]

  const handleOnClick = () => {
    console.log("Add User Button Clikced")
    navigate('/add-user')
  }

  const handleLogOut = () => {
    console.log("Logout Button Clikced")
    dispatch(logout())
    navigate('/login')
  }

  const handleEdit = (id) => {
    console.log("Edit Button Clicked", id)
    navigate(`/edit-user/${id}`)
  }

  const handleDelete = (id) => {
    console.log("Delete Button Clicked", id)
    dispatch(deleteUser(id))
  }

  const renderCard = () => users.map((user) => (
    <div key={user.id} className="bg-gray-300 p-5 flex items-center justify-between">
        <div>
            <h3 className="font-bold text-lg text-gray-700">{user.name}</h3>
            <p className="font-normal text-gray-600">{user.email}</p>
        </div>
        <div className="flex gap-5">
            <button onClick={() => handleEdit(user.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                </svg>
            </button>
            <button onClick={() => handleDelete(user.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
            </button>
        </div>
    </div>
  ))
  

  return (
    <div>\
      <div className='flex gap-3'>
        <Button onClick={handleOnClick}>Add User</Button>
        <Button onClick={handleLogOut}>Logout</Button>
      </div>
        <div className="grid gap-5 md:grid-cols-2">
            {users.length > 0 
                ? renderCard() 
                : <p className="text-center col-span-2 text-gray-700 font-semibold">No User Found</p>
            }
        </div>
    </div>
  )
}

export default UserList