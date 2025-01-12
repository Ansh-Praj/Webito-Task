import React from 'react'

function Users({user}) {
  return (
        <div className='bg-slate-400 rounded-md p-2 m-2'>
            <p>Fullname: {user.fullName}</p>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
        </div>
    )
}

export default Users