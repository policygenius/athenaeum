import React from 'react';
import { shallow } from 'enzyme';

import { A } from 'atoms/Elementals';
import MenuLink from '../MenuLink';

describe('<MenuLink />', () => {
  describe('rendering', () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        header: 'test',
        href: 'test-href',
      };

      wrapper = shallow(<MenuLink {...props} />);
    });

    it('renders <A /> with props', () => {
      const anchor = wrapper.find(A);

      expect(anchor.props().href).toEqual('test-href');
      expect(anchor.props().children).toEqual('test');
    });
  });
});
