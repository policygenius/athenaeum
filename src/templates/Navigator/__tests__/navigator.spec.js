import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Navigator from 'templates/Navigator';

describe('Navigator', () => {

  describe('Render', () => {
    let props;

    beforeEach(() => {
      props = {
        stepIndicatorProps: {
          steps: [],
          navigateToPath: '/health/basic_info',
        },
        mobileHeader: <div><p>Hello World</p></div>,
        headerLinks: [
          {
            icon: 'chat',
            text: 'Chat',
            link: jest.fn(),
          },
          {
            icon: 'phone',
            text: 'Call',
            link: 'tel:1-855-695-2255',
          },
        ]
      };
    });

    it('should render `main` children when passed in', () => {
      const wrapper = shallow(
        <Navigator {...props}>
          <div className='unique' />
        </Navigator>
      );

      expect(wrapper.contains(<div className='unique' />)).to.be.true;
    });

    it('should render `sidebar` children when passed in', () => {
      props.sidebar = <div className='unique' />;
      const wrapper = shallow(<Navigator {...props} />);

      expect(wrapper.find('.sidebar')).to.have.length(1);
      expect(wrapper.contains(<div className='unique' />)).to.be.true;
    });

    it('should render header links', () => {
      const wrapper = shallow(<Navigator {...props} />);

      const headerLinks = wrapper.find('.header-icon-lockup');

      expect(headerLinks).to.have.length(2);
      expect(headerLinks.find('.header-icon').findWhere(n => n.props().icon === 'chat')).to.have.length(1);
      expect(headerLinks.find('.header-icon').findWhere(n => n.props().icon === 'phone')).to.have.length(1);
    });
  });
});
