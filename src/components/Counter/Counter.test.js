import React from 'react'
import { shallow } from 'enzyme'
import Counter from './Counter'

describe('Counter Component', () => {
  it('starts with a count of 0', () => {
    const wrapper = shallow(<Counter />)
    const text = wrapper.find('p').text()
    expect(text).toEqual('Current Count: 0')
  })

  it('can increment the count when the increment button is clicked', () => {
    const wrapper = shallow(<Counter />)
    const incrementBtn = wrapper.find('button.increment')
    incrementBtn.simulate('click')
    const text = wrapper.find('p').text()
    expect(text).toEqual('Current Count: 1')
  })

  it('can decrement the count when the decrement button is clicked', () => {
    const wrapper = shallow(<Counter />)
    const decBtn = wrapper.find('button.decrement')
    decBtn.simulate('click')
    const text = wrapper.find('p').text()
    expect(text).toEqual('Current Count: -1')
  })
})