import React, { useEffect } from 'react'

const SideEffect = (props) => {

    useEffect(() => {
      console.log("This is component did mount!!----> only one time");
    },[]);
    
    useEffect(() => {
      console.log("This is component did update");
    }, [props])
    
    useEffect(() => {
        console.log("Component will unmount");
      return () => {
      }
    }, [])
    

  return (
    <div>
        <div>
            <h1>This is an UseEffect...!!</h1>
        </div>
    </div>
  )
}

export default SideEffect