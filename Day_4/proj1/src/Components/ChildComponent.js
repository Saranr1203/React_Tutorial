import React, { Component } from 'react'

export default class ChildComponent extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.details.name} is my name</h1>
        <h1>{this.props.details.email} is my email</h1>
      </div>
    )
  }
}
