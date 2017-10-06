import { shallow } from 'enzyme';
import { expect } from 'chai';

import renderOption from 'utils/fieldUtils/renderOption';

describe('renderOption Util', () => {

  it('renders an option tag', () => {
    const sampleOption = {
      reactKey: 'reactChildKey',
      value: 'super',
      label: 'Test Label',
    };

    const wrapper = shallow(renderOption(sampleOption, 0));

    expect(wrapper.is('option')).to.be.true;
    expect(wrapper.props().value).to.equal(sampleOption.value);
    expect(wrapper.key().includes(sampleOption.reactKey)).to.be.true;
    expect(wrapper.contains('Test Label')).to.be.true;
  });

  it('uses the index as a key if one has not been provided', () => {
    const wrapper = shallow(renderOption({}, 0));

    expect(wrapper.key()).to.eq('0');
  });
});
