import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class ParentComponent extends Component {
  render() {
      const data={
          "name":"Saran",
          "email":"saranr1203@gmail.com"
      }
      return (
      <div>
        <ChildComponent details={data}/>
      </div>
    )
  }
}
