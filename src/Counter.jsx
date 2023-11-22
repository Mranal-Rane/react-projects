import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
    const [num,setnum] = useState(0)
    const increment = () => {
          setnum(num+1)
          
    }
    const decrement = () => {
        if(num>0){
            setnum(num-1)
        }
        else{
            setnum(0)
            alert("limit reached")
        }
        
  }
  
  return (
    <div className='balti'>
        <div className='container'>
            <h1>Counter</h1>
            <h1>{num}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
        
    </div>
  )
}

export default Counter