import React, { createContext, useContext } from 'react'

const myContext = createContext()

function Context() {

    const value = "Hello World"

  return (
    <div className='border-2 border-white p-2 m-1'>
        <myContext.Provider value={value} >
            <p>Context Component (containing value)</p>
            <ComponentA />
        </myContext.Provider>
    </div>
)


}
function ComponentA() {
  return (
    <div className='border-2 border-white p-2 m-1'>
        <p>Component A</p>
        <ComponentB />
    </div>
  )
}



function ComponentB() {
  return (
    <div className='border-2 border-white p-2 m-1'>
        <p>Component B</p>
        <ComponentC />
    </div>
  )
}



function ComponentC() {

    const value = useContext(myContext)

  return (

    <div className='border-2 border-white p-2 m-1'>
        <p>Component C</p>
        <p>{value}</p>
    </div>
  )
}

export default Context