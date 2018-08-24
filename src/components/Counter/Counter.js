import React, { Component } from 'react'

class Counter extends Component {
  state = {
    count: 0
  }
  makeIncrementer = amount => () => {
    this.setState(({ count }) => ({ count: count + amount }))
  }
  icrement = this.makeIncrementer(1)
  deccrement = this.makeIncrementer(-1)
  render() {
    const { count } = this.state
    return (
      <div>
        <p>Current Count: {count}</p>
        <button
          className='increment'
          onClick={this.icrement}>
          +++
        </button>
        <button
          className='decrement'
          onClick={this.deccrement}>
          ---
        </button>
      </div>
    )
  }
}

export default Counter
