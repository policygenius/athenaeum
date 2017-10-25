/* eslint-disable no-extra-parens */
import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import MobileHeader from 'molecules/MobileHeader';
import LinkWrapper from 'atoms/LinkWrapper';
import Text from 'atoms/Text';

describe('<MobileHeader />', () => {
  let component;

  beforeEach(() => {
    component =
      (<MobileHeader
        text={
          <LinkWrapper
            type='secondary'
            onClick={jest.fn()}
          >
            <Text
              size={10}
              type='b'
            >
              Save your progress
            </Text>
          </LinkWrapper>
        }
        quote={
          <Text
            size={6}
            font='a'
          >
            <Text tag='sup' size={10} font='a'>$</Text>39.50 <Text tag='span' size={10} font='a'>/mo</Text>
          </Text>
        }
        dropdown={{
          menuActive: false,
          onClick: jest.fn(),
        }}
      />)
    ;
  });

  it('renders correctly', () => {
    const wrapper = mount(component);

    expect(wrapper.type()).toEqual(MobileHeader);
  });

  it('renders correctly', () => {
    const actual = renderer.create(component).toJSON();

    expect(actual).toMatchSnapshot();
  });
});
