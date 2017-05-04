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

    const wrapper = shallow(renderOption(sampleOption));

    expect(wrapper.is('option')).to.be.true;
    expect(wrapper.props().value).to.equal(sampleOption.value);
    expect(wrapper.key().includes(sampleOption.reactKey)).to.be.true;
    expect(wrapper.contains('Test Label')).to.be.true;
  });

  it('generates a random key if one has not been provided', () => {
    const wrapper = shallow(renderOption({}));

    expect(wrapper.key()).to.be.a('string');
    expect(wrapper.key().includes('opt-')).to.be.true;
    expect(wrapper.key().length).to.be.above(5);
  });

});
