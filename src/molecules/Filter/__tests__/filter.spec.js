import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Filter from 'molecules/Filter';

describe('<Filter />', () => {
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      label: 'Test label',
      selectOptions: [
        {
          label: 'Option 1',
          value: 1
        },
        {
          label: 'Option 2',
          value: 2
        },
        {
          label: 'Option 3',
          value: 3
        }
      ],
      value: 2,
      onChange: jest.fn(),
    };
  });

  it('renders correctly', () => {
    const wrapper = mount(<Filter {...defaultProps} />);

    expect(wrapper.type()).toEqual(Filter);
  });

  it('renders correctly', () => {
    const actual = renderer.create(<Filter {...defaultProps} />).toJSON();

    expect(actual).toMatchSnapshot();
  });
});
