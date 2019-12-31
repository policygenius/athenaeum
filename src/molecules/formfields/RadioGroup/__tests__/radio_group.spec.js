/* eslint-disable no-extra-parens */
import React from 'react';
import renderer from 'react-test-renderer';

import RadioGroup from 'molecules/formfields/RadioGroup';
import RadioField from 'molecules/formfields/RadioField';

describe('<RadioGroup />', () => {
  let component;

  beforeEach(() => {
    component = (
      <RadioGroup
        label='Test label'
        subLabel='Sublabel action'
        meta={{}}
        input={{
          value: 'test',
        }}
        tooltip='Hello friend'
      >
        <RadioField
          label='Burgers'
          radioValue='burgers'
          input={{
            name: 'food',
            value: 'dogs',
            onChange: jest.fn(),
          }}
        />
        <RadioField
          label='Hot Dogs'
          radioValue='dogs'
          input={{
            name: 'food',
            value: 'dogs',
            onChange: jest.fn(),
          }}
        />
      </RadioGroup>
    );
  });

  it('renders correctly', () => {
    const actual = renderer.create(component).toJSON();

    expect(actual).toMatchSnapshot();
  });
});
