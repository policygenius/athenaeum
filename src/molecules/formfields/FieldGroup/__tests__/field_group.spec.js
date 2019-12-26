/* eslint-disable no-extra-parens */
import React from 'react';
import renderer from 'react-test-renderer';

import FieldGroup from 'molecules/formfields/FieldGroup';
import TextField from 'molecules/formfields/TextField';

describe('<FieldGroup />', () => {
  let component;

  beforeEach(() => {
    component = (
      <FieldGroup
        labels={[
          {
            label: 'Test',
          },
          {
            label: 'Another test',
          },
        ]}
        input={{}}
        meta={{}}
      >
        <TextField
          placeholder='mm'
          input={{}}
        />
        <TextField
          placeholder='yyyy'
          input={{}}
        />
      </FieldGroup>
    );
  });

  it('renders correctly', () => {
    const actual = renderer.create(component).toJSON();

    expect(actual).toMatchSnapshot();
  });
});
