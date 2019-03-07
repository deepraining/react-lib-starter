import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Hello } from '../src';

Enzyme.configure({ adapter: new Adapter() });

test('Hello component', () => {
  const hello = shallow(<Hello name="test" />);

  expect(hello.hasClass('starter-hello')).toBe(true);
  expect(hello.text()).toBe('Hello, test!');
});
