import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Navigator from 'templates/Navigator';

describe('Navigator', () => {

  describe('Render', () => {
    let props;

    beforeEach(() => {
      props = {
        data: [],
        leftRailText: 'Left Rail Text',
        contact: {
          chatText: 'hi',
          phoneNumber: '867-5309',
          chatClick: () => null
        },
        userAlert: {}
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

    it('should render railText', () => {
      const wrapper = shallow(<Navigator {...props} />);

      expect(wrapper.contains(props.leftRailText)).to.be.true;
    });
  });

});
