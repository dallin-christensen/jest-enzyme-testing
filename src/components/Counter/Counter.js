import React, { Component } from 'react'

class Counter extends Component {
  state = {
    count: 0
  }
  icrement = () => this.setState(({ count }) => ({ count: ++count }))
  deccrement = () => this.setState(({ count }) => ({ count: --count }))
  render() {
    const { count } = this.state
    return (
      <div>
        <p>Current Count: {count}</p>
        <button
          className='increment'
          onClick={this.icrement}>
          Increase Count
        </button>
        <button
          className='decrement'
          onClick={this.deccrement}>
          Decrease Count
        </button>
      </div>
    )
  }
}

export default Counter
