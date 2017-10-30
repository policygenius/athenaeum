import React from 'react';
import { shallow } from 'enzyme';

import { Span } from 'atoms/Elementals';
import PrimaryMenuWrapper from '../PrimaryMenuWrapper';

describe('<PrimaryMenuWrapper />', () => {
  describe('rendering', () => {
    let props;

    beforeEach(() => {
      props = {
        header: 'test',
        activeName: 'test-active',
        onClick: jest.fn(),
        searching: false,
      };
    });

    it('adds active className when active', () => {
      const wrapper = shallow(<PrimaryMenuWrapper {...props} />);

      expect(wrapper.find('li').props().className.includes('active')).toEqual(false);

      wrapper.setProps({ active: props.activeName });

      expect(wrapper.find('li').props().className.includes('active')).toEqual(true);
    });

    it('adds has-children className when children present', () => {
      const wrapper = shallow(<PrimaryMenuWrapper {...props} />);
      const wrapperWithChildren = shallow(
        <PrimaryMenuWrapper {...props}>
          <p>Hello World</p>
        </PrimaryMenuWrapper>
      );

      expect(wrapper.find('li').props().className.includes('has-children')).toEqual(false);
      expect(wrapperWithChildren.find('li').props().className.includes('has-children')).toEqual(true);
    });

    it('renders <Span /> with props.header as child', () => {
      const wrapper = shallow(<PrimaryMenuWrapper {...props} />);

      expect(wrapper.find(Span).props().children).toEqual('test');
    });
  });
});
