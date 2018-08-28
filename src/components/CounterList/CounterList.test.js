import React from 'react'
import { shallow } from 'enzyme'
import CounterList from './CounterList'

describe('CounterList', () => {
  it('Should render two counters by default', () => {
    const wrapper = shallow(<CounterList />)

    const counters = wrapper.find('Counter')
    expect(counters.length).toEqual(2)
  })

  it('can add more counters when we click the button', () => {
    const wrapper = shallow(<CounterList />)

    const button = wrapper.find('button')
    button.simulate('click')

    const counters = wrapper.find('Counter')
    expect(counters.length).toEqual(3)
  })
})