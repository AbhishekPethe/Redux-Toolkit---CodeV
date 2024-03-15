import React, { useEffect } from 'react'
import {useSelector , useDispatch} from "react-redux"
import { fetchUsers } from './usersSlice'

const UsersView = () => {
    const { loading, users, error } = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    } , [])
  return (
      <div>UsersView :
          <>
              {loading && <p>Loading...</p>}
          </>
          {error.length > 1  ? error : users}
      
      </div>
  )
}

export default UsersView