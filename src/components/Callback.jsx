import React, { useCallback, useEffect, useState } from 'react'
import Test from './Test';

function Callback() {

    const [value, setValue] = useState(0)
    const [depValue, setDepValue] = useState(0)

    const func = useCallback(()=>{
        return "Hello"
    }, [depValue])

  return (
    <div className='w-full h-screen flex justify-center items-center flex-col'>

            <p className='text-3xl mb-10'>Check Console</p>
            <button 
            onClick={()=> setValue((prev)=> prev+1)}
            className='border-2 border-white rounded p-1 bg-white my-1 text-black'
            >
                Change value state
            </button>

            <button 
            onClick={()=> setDepValue((prev)=> prev+1)}
            className='border-2 border-white rounded p-1 bg-white my-1 text-black'
            >
                Change callback dependency's value
            </button>

            <Test func={func}/>
    </div>
  )
}

export default Callback