import React, {useState} from 'react'
import Child from './Child';

export default function Parent() {
    const [val, setval] = useState(0)

    const inc = () => {
        setval(val + 1);
    }
  return (
    <div>
        <h3>Counter value in Parent : {val}</h3>
        <Child data = {val}/>
        <button onClick={inc}>Increment</button>
    </div>
  )
}
