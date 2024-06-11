import React, { Component } from 'react'
import './Counter.css';

export default class Counter extends Component {
   
    constructor(){
        super();
        this.state = {
            count : 0
        }
    }
    
    inc = () => {
        this.setState({
            count : this.state.count + 1
        })
    }

    dec = () => {
        this.setState({
            count : this.state.count - 1
        })
    }

    rec = () => {
        this.setState({
            count : 0
        })
    }

    render() {
    return (
      <div>
        <div className='head'>
            <h1>Counter</h1>
        </div>
        <div className='box'>
            <div className='count'>
                Count : {this.state.count}
            </div>
            <div>
                <div className='butbox'>
                    <button onClick={this.inc}>Increment</button>
                    <button onClick={this.dec}>Decrement</button>
                    <button onClick={this.rec}>Reset</button>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
