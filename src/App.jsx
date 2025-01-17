import { Link } from 'react-router'
import './App.css'

function App() {

  return (
    <div className='h-screen w-full flex justify-center items-center flex-col gap-3'>

      <Link to={'form'} className='load w-1/3 py-3 rounded-lg text-center bg-white text-slate-800 font-semibold text-2xl hover:bg-black hover:text-white hover:border-white border-2 transition ease-in-out duration-300'>Form validation</Link>

      <Link to={'effect-ref'} className='load w-1/3 py-3 rounded-lg text-center bg-white text-slate-800 font-semibold text-2xl hover:bg-black hover:text-white hover:border-white border-2 transition ease-in-out duration-300'>useEffect, useRef</Link>

      <Link to={'callback'} className='load w-1/3 py-3 rounded-lg text-center bg-white text-slate-800 font-semibold text-2xl hover:bg-black hover:text-white hover:border-white border-2 transition ease-in-out duration-300'>useCallback</Link>

      <Link to={'memo'} className='load w-1/3 py-3 rounded-lg text-center bg-white text-slate-800 font-semibold text-2xl hover:bg-black hover:text-white hover:border-white border-2 transition ease-in-out duration-300'>useMemo</Link>

      <Link to={'context'} className='load w-1/3 py-3 rounded-lg text-center bg-white text-slate-800 font-semibold text-2xl hover:bg-black hover:text-white hover:border-white border-2 transition ease-in-out duration-300'>useContext</Link>

    </div>
  )
}

export default App
