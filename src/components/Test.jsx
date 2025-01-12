import React, { memo } from 'react'

function Test({func}) {
    console.log("Callback function called");
  return (
    <div className='bg-slate-300 w-full my-10 text-black text-center'>
        <p className='text-black mb-4'>Test Component</p>
        <p className='text-black'>Prop Function Passed: {func()}</p>
        </div>
  )
}

export default memo(Test)