import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Img from 'atoms/Img';

describe('<Img />', () => {
  const { warn } = console;

  beforeAll(() => {
    console.warn = jest.fn();
  });

  afterAll(() => {
    console.warn = warn;
  });

  it('renders correctly', () => {
    const wrapper = mount(<Img />);

    expect(wrapper.type()).toEqual(Img);
  });

  it('renders correctly with default props', () => {
    const actual = renderer.create(<Img />).toJSON();

    expect(actual).toMatchSnapshot();
  });

  it('renders correctly with given imgix props', () => {
    const imgixProps = {
      className: 'cool-class',
      imgixSrc: 'photos/are-cool.jpg',
      maxWidth: '10',
      maxHeight: '20',
    };

    const actual = renderer.create(<Img {...imgixProps} />).toJSON();

    expect(actual).toMatchSnapshot();
  });

  it('renders correctly with given regular props', () => {
    const regProps = {
      className: 'cool-class',
      src: 'some-url',
      srcSet: 'some-url',
      imgixSrc: 'photos/are-cool.jpg',
      alt: 'alt',
      title: 'title',
      maxWidth: '10',
      maxHeight: '20',
    };

    const actual = renderer.create(<Img {...regProps} />).toJSON();

    expect(actual).toMatchSnapshot();
  });

  it('renders correctly with given regular picture source props', () => {
    const props = {
      alt: 'Alternative',
      mobileSrc: 'small',
      tabletSrc: 'medium',
      desktopSrc: 'large',
      src: 'default.jpg'
    };

    const actual = renderer.create(<Img {...props} />).toJSON();

    expect(actual).toMatchSnapshot();
  });

  it('renders correctly with given imgix picture source props', () => {
    const props = {
      mobileImgixSrc: 'small',
      tabletImgixSrc: 'medium',
      desktopImgixSrc: 'large',
      imgixSrc: 'default.jpg'
    };

    const actual = renderer.create(<Img {...props} />).toJSON();

    expect(actual).toMatchSnapshot();
  });

  it('renders with hide classes when null src props are provided', () => {
    const props = {
      mobileImgixSrc: null,
      tabletImgixSrc: null,
      imgixSrc: 'default.jpg'
    };

    const actual = renderer.create(<Img {...props} />).toJSON();

    expect(actual).toMatchSnapshot();
  });
});
