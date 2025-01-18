import { useState } from 'react';
import './index.css' ;


function BgChanger() {

  const[color, setColor] = useState("olive")

  return (

    <div className='w-full h-screen duration-300 flex items-center justify-center'
    style={{ backgroundColor:color }}>

<div className={`text-center font-semibold text-xl uppercase ${
      color === 'white' ? "text-gray-500" : "text-white"
    }`}
  >
    Background Changed to {color}
  </div>
    

    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 py-2 opacity-30 hover:opacity-100 duration-500">
      <div className='flex flex-wrap justify-center bg-yellow-500 rounded-3xl px-3 py-2 gap-4 text-white font-semibold'>
        <button 
        onClick={() => setColor("red")}
        className='px-3 py-1 rounded-full bg-red-600'>Red</button>
        <button
        onClick={() => setColor("green")}
         className='px-3 py-1 rounded-full bg-green-500'>Green</button>
        <button 
        onClick={() => setColor("indigo")}
        className='px-3 py-1 rounded-full bg-indigo-600'>Indigo</button>
        <button 
        onClick={() => setColor("violet")}
        className='px-3 py-1 rounded-full bg-violet-500'>Violet</button>
        <button 
        onClick={() => setColor("gray")}
        className='px-3 py-1 rounded-full bg-gray-500'>Gray</button>
        <button 
        onClick={() => setColor("cyan")}
        className='px-3 py-1 rounded-full bg-cyan-500'>Cyan</button>
        <button 
        onClick={() => setColor("teal")}
        className='px-3 py-1 rounded-full bg-teal-600'>Teal</button>
        <button 
        onClick={() => setColor("fuchsia")}
        className='px-3 py-1 rounded-full bg-fuchsia-600'>Fuchsia</button>
        <button 
        onClick={() => setColor("white")}
        className='px-3 py-1 rounded-full bg-white text-black'>White</button>
        <button
        onClick={() => setColor("black")}
        className='px-3 py-1 rounded-full bg-black'>Black</button>
      </div>
  </div>
  </div>
  
  )

}

export default BgChanger
