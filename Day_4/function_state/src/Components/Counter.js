import React, { useState } from 'react'

export default function Counter() {
    const [name, setname] = useState("Shiva")
    
    function trig(){
        setname("Saran")
    }
  
    return (
    <div>
        {name}
        <button onClick={trig}>Click Here</button>
    </div>
  )
}
