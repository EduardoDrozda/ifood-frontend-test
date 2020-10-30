import { Typography } from '@material-ui/core';
import React from 'react';
import Header from '..';
import { User } from '../../../interfaces';

import { mount, renderer } from '../../../setupTests';

fdescribe('<Header />', () => {
  let wrapper: any;

  it('should render component', () => {
    const userInfo: User = {
      displayName: 'Mock User',
      avatar: 'https://via.placeholder.com/150'
    }

    const mockOpenSidebar = jest.fn();

    wrapper = mount(<Header userInfo={userInfo} openSidebar={mockOpenSidebar}/>);

    console.log(wrapper.debug());

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find(Typography).text()).toContain(userInfo.displayName);
  });

});

