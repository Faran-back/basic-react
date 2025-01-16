import './index.css' ;
import { useState } from "react"


function App() {
  
  const [counter, setCounter] = useState(10);
  
  const IncrementValue = () => {
    console.log('INCREMENTED', counter)
    if(counter < 20){
      setCounter(prevCounter => prevCounter + 1 )
      setCounter(prevCounter => prevCounter + 1 )
      setCounter(prevCounter => prevCounter + 1 )
      setCounter(prevCounter => prevCounter + 1 )
    }

  }

  const DecrementValue = () => {
    console.log('DECREMENTED', counter)
    if(counter > 0){
      setCounter( prevCounter => prevCounter - 1)
      setCounter( prevCounter => prevCounter - 1)
      setCounter( prevCounter => prevCounter - 1)
      setCounter( prevCounter => prevCounter - 1)
    }
  }

  return (
    <>
    <div className='text-center'>
   <h2 className="font-bold">Counter Value : {counter} </h2>
   <button className='p-4 bg-green-200 mt-4 hover:bg-green-400 duration-700' onClick={IncrementValue}>INCREMENT</button> <br />
   <button className='p-4 bg-red-200 mt-4 4 hover:bg-red-400 duration-700' onClick={DecrementValue}>DECREMENT</button>
   </div>
    </>
  )
}

export default App
