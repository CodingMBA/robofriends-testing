import { shallow } from 'enzyme';
import React from 'react';

import CounterButton from './CounterButton';

describe('CounterButton', () => {
  it('should render the CardList component', () => {
    const mockColor = 'red';
    expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
  });

  it('receives the correct props for color', () => {
    const mockColor = 'red';
    const wrapper = shallow(<CounterButton color={mockColor} />);

    expect(wrapper.props().color).toEqual('red')
  });

  it('correctly increments the counter', () => {
    const mockColor = 'red';
    const wrapper = shallow(<CounterButton color={mockColor} />);

    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({ count: 1 });
  });
});
