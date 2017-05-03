import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import GeneralForm from 'organisms/forms/GeneralForm';

describe('GeneralForm', () => {

  it('creates a form', () => {
    const wrapper = shallow(<GeneralForm formName='' />);

    expect(wrapper.find('form')).to.have.length(1);
  });

  it('passes props to form', () => {
    const Func = function () {};

    const wrapper = shallow(
      <GeneralForm
        formName='I am form!'
        onSubmit={Func}
      />
    );

    expect(wrapper.childAt(0).prop('name')).to.equal('I am form!');
    expect(wrapper.childAt(0).prop('onSubmit')).to.equal(Func);
  });

});
