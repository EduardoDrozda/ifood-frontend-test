import { Box, CircularProgress } from '@material-ui/core';
import React from 'react';

import { shallow, renderer } from '../../../setupTests';

import FullscreenLoader from '../index';

describe('<FullscreenLoader />', () => {
  let wrapper: any;

  it('should render component', () => {
    wrapper = shallow(<FullscreenLoader showLoading={false} />);

    console.log(wrapper.debug());

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.exists(Box)).toBeFalsy();
    expect(wrapper.exists(CircularProgress)).toBeFalsy();
  })

  it('should render Loader with circular progress', () => {
    wrapper = shallow(<FullscreenLoader showLoading={true} />);

    console.log(wrapper.debug());

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.exists(Box))
      .toBeTruthy();
    expect(wrapper.exists(CircularProgress))
      .toBeTruthy();
  })

  it('should generate snapshot', () => {
    const tree = renderer.create(<FullscreenLoader showLoading={true} />);
    expect(tree).toMatchSnapshot();
  })

});
