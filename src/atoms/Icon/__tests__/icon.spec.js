import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Icon from 'atoms/Icon';

describe('<Icon />', () => {
  describe('when no icon is given', () => {
    const { error } = console;

    beforeEach(() => {
      console.error = jest.fn();
    });

    afterEach(() => {
      console.error = error;
    });

    it('returns null', () => {
      const wrapper = shallow(<Icon />);

      expect(wrapper.type()).toEqual(null);
      expect(console.error).toBeCalled();
    });
  });

  describe('when passed an icon as a name string', () => {
    it('renders a regular img element', () => {
      const props = {
        icon: 'xIcon'
      };

      const wrapper = mount(<Icon {...props} />);

      expect(wrapper.find('img')).toHaveLength(1);
    });
  });

  it('matches snapshot', () => {
    const props = {
      className: 'some-class',
      onClick: jest.fn(),
      height: '100px',
      width: '200px',
      inline: 'left',
      icon: 'xIcon'
    };

    const actual = renderer.create(<Icon {...props} />).toJSON();

    expect(actual).toMatchSnapshot();
  });
});
