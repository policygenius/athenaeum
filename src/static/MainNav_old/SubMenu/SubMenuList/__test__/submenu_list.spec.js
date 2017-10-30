import React from 'react';
import { shallow } from 'enzyme';

import LinkWrapper from 'atoms/LinkWrapper';
import SubMenuList from '../';

describe('<SubMenuList />', () => {
  describe('rendering', () => {
    let props;
    let wrapper;

    beforeEach(() => {
      props = {
        header: 'test',
        listItems: [
          {
            title: 'test-title-1',
            url: 'test-url-1/',
          },
          {
            title: 'test-title-2',
            url: 'test-url-2/',
          },
        ],
      };

      wrapper = shallow(<SubMenuList {...props} />);
    });

    it('renders same li nodes as listItems length', () => {
      const li = wrapper.find('li');

      expect(li.findWhere(n => n.hasClass('list-item')).length).toEqual(props.listItems.length);
    });

    it('renders <LinkWrapper /> with appropriate item props', () => {
      const link = wrapper.find(LinkWrapper);

      props.listItems.forEach((item) => {
        expect(link.findWhere(n => n.props().href === item.url).length).toEqual(1);
        expect(link.findWhere(n => n.props().children === item.title).length).toEqual(1);
      });
    });
  });
});
