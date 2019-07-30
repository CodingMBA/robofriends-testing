import { shallow } from 'enzyme';
import React from 'react';

import MainPage from './MainPage';

describe('MainPage', () => {
  let wrapper;
  beforeEach(() => {
    const mockProps = {
      onRequestRobots: jest.fn(),
      robots: [{
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
      }],
      searchField: 'jo',
      isPending: false
    }
    wrapper = shallow(<MainPage { ...mockProps } />)
  })
  
  it('should render the MainPage component', () => {
    expect(wrapper).toMatchSnapshot()
    
  });

  it('filters robots correctly', () => {
    expect(wrapper.instance().filterRobots()).toEqual([{
      id: 3,
      name: 'John',
      email: 'john@gmail.com'
    }])

  });

});
