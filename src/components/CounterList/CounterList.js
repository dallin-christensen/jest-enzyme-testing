import React, { Component } from 'react'
import Counter from '../Counter/Counter'

const createRange = (num) => Array.from(Array(num).keys())

export class CounterList extends Component {
  state = {
    numCounters: 2
  }
  addCounter = () => {
    const { numCounters } = this.state
    this.setState({ numCounters: numCounters + 1 })
  }

  renderCounter = (index) => {
    return (
      <li key={index}>
        <Counter />
      </li>
    )
  }
  render() {
    const { numCounters } = this.state
    const countersArray = createRange(numCounters)
    return (
      <div>
        <button
          onClick={this.addCounter}
        >
          Add Counter
        </button>
        <ul>
          {
            countersArray.map((num) => {
              return this.renderCounter(num)
            })
          }
        </ul>
      </div>
    )
  }
}

export default CounterList
