import React, { useState } from 'react'
import axios from 'axios'

const Api = () => {
    const [apidata, setapidata] = useState([]);
    const add = () =>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res =>{
            setapidata(res.data)
            console.log("Response----->>>",res)
        }
        )
    }
  return (
    <div>
        <h1>Dynamic Values</h1>
        <button onClick={add}>Get Value</button>
        {
          apidata.map(index  =>(
            <ul>
              <li key={index.id}>{index.name}</li>
            </ul>
          ))
        }
    </div>
  )
}

export default Api