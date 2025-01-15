import { useState } from "react"


function App() {
  
  const [counter, setCounter] = useState(10);
  
  const IncrementValue = () => {
    console.log('INCREMENTED', counter)
    if(counter < 20){
      setCounter(counter + 1 )
    }

  }

  const DecrementValue = () => {
    console.log('DECREMENTED', counter)
    if(counter > 0){
      setCounter(counter - 1)
    }
  }

  return (
    <>
   <h2>Counter Value : {counter} </h2>

   <button onClick={IncrementValue}>INCREMENT</button> <br /> <br />
   <button onClick={DecrementValue}>DECREMENT</button>
    </>
  )
}

export default App
