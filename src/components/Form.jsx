import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import Users from './Users'

function Form() {

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    
    const [users, setUsers] = useState([])
    const [error, setError] = useState('')

    function submitHandler(e){
        e.preventDefault()

        if(formData.password.length<8){
            setError('Password must be atleast 8 characters long.')
            return
        }
        if(!/[A-Z]/.test(formData.password)){
            setError('Password must contain a capital letter.')
            return
        }
        if(!/[0-9]/.test(formData.password)){
            setError('Password must contain a number.')
            return
        }
        if(!/[!@#$%^&*<>?]/.test(formData.password)){
            setError('Password must contain a special character.')
            return
        }
        if(formData.password !== formData.confirmPassword){
            setError('Password and confirm password must be same.')
            return
        }

        setUsers((prevUsers) => [
            ...prevUsers, {
                fullName: formData.fullName,
                email: formData.email,
                password: formData.password
            }
        ])

        setError('')
        setFormData({
            fullName: '',
            email: '',
            password: '',
            confirmPassword: ''
        })

        toast.success('Sucess! ✅', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    } 


    function handleChanges(e){


        const {name, value} = e.target

        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))

    } 


  return (
    <>
        <div className='flex justify-center items-center w-full h-screen flex-col'>
            <h1 className='mb-2'>Used useState, props, form validation, form submission handling</h1>

            <div className='bg-white p-4 w-96 rounded-lg'>
                <div className='shadow-lg max-w-sm rounded-lg p-6'>
                    <form className='flex flex-col gap-4 text-black' onSubmit={submitHandler}>

                        <input 
                        name='fullName'
                        type="text" 
                        onChange={handleChanges}
                        value={formData.fullName}
                        required
                        className='w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-blue-500 outline-none'
                        placeholder='Enter First name'/>

                        <input 
                        name='email'
                        className='w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-blue-500 outline-none'
                        type="email" 
                        onChange={handleChanges}
                        value={formData.email}
                        required
                        placeholder='Enter Your e-mail'/>

                        <input 
                        name='password'
                        type="password" 
                        onChange={handleChanges}
                        value={formData.password}
                        required
                        className='w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-blue-500 outline-none'
                        placeholder='Enter Password'/>

                        <input 
                        name='confirmPassword'
                        type="password" 
                        onChange={handleChanges}
                        value={formData.confirmPassword}
                        required
                        className='w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-blue-500 outline-none'
                        placeholder='Confirm Password'/>

                        <p className='text-red-500 text-center'>{error}</p>

                        <button
                        className='w-full bg-blue-500 px-4 py-2 rounded-lg text-white font-semibold my-4'
                        >Submit</button>
                    </form>
                </div>
            </div>

        </div>

        {console.log(users)}
        {users.length ? <h1 className='text-center font-semibold text-slate-400 text-xl mb-3'>Details of Users</h1>:""} 
        <div className='flex gap-1 flex-wrap'>
            {users.map((user)=> <Users user={user} />)}
        </div>


        {<ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />}

    </>
  )
}

export default Form