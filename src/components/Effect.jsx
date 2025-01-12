import React, { useEffect, useRef } from 'react'

function Effect() {
    const inputRef = useRef()

    useEffect(()=>{
        inputRef.current.value = "Test Value"
    })

  return (
    <div className='flex items-center justify-center w-full h-screen'>
        <form className='w-full flex flex-col items-center'>
            <label>Inserting value on every render using useEffect and useRef Hooks</label>
            <input type="text" 
            className='text-black px-2 py-1 rounded-sm outline-none w-1/5 my-3'
            ref={inputRef}
            />
        </form>
    </div>
  )
}

export default Effect