import { shallow } from 'enzyme';
import { expect } from 'chai';

import renderOptGroup from 'utils/fieldUtils/renderOptGroup';

describe('renderOptGroup Util', () => {

  it('renders an option group', () => {
    const optGroup = {
      reactKey: 'reactChildKey',
      group: 'gruppe',
      options: [
        { label: 'labelle', value: 1 },
        { label: 'labella', value: 3 },
      ],
    };

    const wrapper = shallow(renderOptGroup(optGroup, 0));

    expect(wrapper.is('optgroup')).to.be.true;
    expect(wrapper.key().includes(optGroup.reactKey)).to.be.true;
    expect(wrapper.find('option').length).to.equal(2);
  });

  it('uses the index as a key if one has not been provided', () => {
    const wrapper = shallow(renderOptGroup({}, 0));

    expect(wrapper.key()).to.eq('0');
  });
});
