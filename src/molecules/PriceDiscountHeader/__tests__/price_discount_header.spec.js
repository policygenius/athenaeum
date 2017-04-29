import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import PriceDiscountHeader from '../index';

describe('PriceDiscountHeader', () => {

  it('is a <PriceDiscountHeader>', () => {
    const wrapper = shallow(<PriceDiscountHeader amount={100} />);

    expect(wrapper.length).to.equal(1);
  });

  it('shows label if prop.label is set', () => {
    const wrapper = shallow(<PriceDiscountHeader amount={100} />);

    expect(wrapper.find('.label')).to.have.length(0);
    expect(wrapper.find('.prev-amount')).to.have.length(0);

    wrapper.setProps({ label: 'unit', prevAmount: 200 });

    expect(wrapper.find('.prev-amount')).to.have.length(1);
    expect(wrapper.find('.label')).to.have.length(1);
    expect(wrapper.find('.label').text()).to.equal('unit');
  });
});
