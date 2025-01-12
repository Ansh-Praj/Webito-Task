import React, { useEffect, useMemo, useState } from 'react'

function Memo() {

    const [value, setValue] = useState(0)
    const [memoizedValue, setMemoizedValue] = useState(0)

    const heavyTask = useMemo(()=>{
        for(let i=0; i<=10000; i++){
            console.log(i);
        }
    }, [memoizedValue])

  return (
    <div className='w-full h-screen flex justify-center items-center flex-col'>
            <p className='text-3xl mb-10'>Check console to see intensive task</p>
            <p>Value of State variable: {value}</p>
            <p>Value of useMemo dependency: {memoizedValue}</p>
            <div>
                <button 
                className='border-2 border-white px-2 py-1 rounded-md mx-2 my-4'
                onClick={()=> setValue((prev)=> prev+1)}
                >Change State</button>

                <button 
                className='border-2 border-white px-2 py-1 rounded-md'
                onClick={()=>setMemoizedValue((prev)=> prev + 1)}
                >Change value of useMemo dependency's value and re-compute</button>
            </div>
    </div>
  )
}

export default Memo