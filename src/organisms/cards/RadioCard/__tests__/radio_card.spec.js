import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import RadioCard from 'organisms/cards/RadioCard';
import Icon from 'atoms/Icon';

describe('<RadioCard />', () => {

  it('renders', () => {
    const wrapper = shallow(<RadioCard label='its a label' input={{}} radioValue='something' />);

    expect(wrapper.length).to.equal(1);
  });

  describe('renders icon or image', () => {
    it('renders an image', () => {
      const wrapper = shallow(<RadioCard label='its a label' input={{}} image='imgSrc' radioValue='something' />);

      expect(wrapper.find('img').length).to.equal(1);
    });

    it('always renders Icon when available', () => {
      const wrapper = shallow(<RadioCard label='its a label' input={{}} iconProps={{ icon: 'headAside' }} image='imgSrc' radioValue='something' />);

      expect(wrapper.find(Icon).length).to.equal(1);
      expect(wrapper.find(Icon).props().icon).to.equal('headAside');

    });
  });
});
