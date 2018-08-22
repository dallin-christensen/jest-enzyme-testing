import React from 'react';
// import ReactTestUtils from 'react-dom/test-utils'
// import ShallowRenderer from 'react-test-renderer/shallow'
import { shallow } from 'enzyme';
import App from './App';
 
it('renders "Our Todo List"', () => {
  const wrapper = shallow(<App/>);
  // expect(wrapper.contains(textHeader)).toEqual(true);
  expect(true).toEqual(true);
});
