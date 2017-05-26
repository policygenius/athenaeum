import React from 'react'; import { expect } from 'chai';
import { shallow } from 'enzyme';

import HeaderDiscount from '../index';

describe('<HeaderDiscount />', () => {

  it('renders', () => {
    const wrapper = shallow(<HeaderDiscount amount={100} />);

    expect(wrapper.length).to.equal(1);
  });

  it('shows label if prop.unit is set', () => {
    const wrapper = shallow(<HeaderDiscount amount={100} />);

    expect(wrapper.find('.unit')).to.have.length(0);
    expect(wrapper.find('.prev-amount')).to.have.length(0);

    wrapper.setProps({ unit: 'unit', prevAmount: 200 });

    expect(wrapper.find('.prev-amount')).to.have.length(1);
    expect(wrapper.find('.unit').text()).to.equal('unit');
  });
});
