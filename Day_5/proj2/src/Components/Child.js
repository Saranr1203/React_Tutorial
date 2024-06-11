import React from 'react'

export default function Child(props) {
  return (
    <div>
        <h3>Counter value in Child : {props.data}</h3>
    </div>
  )
}