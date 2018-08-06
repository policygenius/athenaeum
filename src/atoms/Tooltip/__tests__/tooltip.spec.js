import React from 'react';
import { mount, shallow } from 'enzyme';
import Icon from 'atoms/Icon';
import Modal from 'molecules/Modal';
import Tooltip from '../';

describe('Tooltip', () => {
  let component;
  let props;

  it('defaults to Icon when text is not provided', () => {
    component = mount(<Tooltip />);
    const child = component.children().childAt(0);

    expect(child.find(Icon).length).toEqual(1);
  });

  it('renders text when provided', () => {
    props = { text: 'Hello world' };
    component = mount(<Tooltip {...props} />);
    const child = component.children().childAt(0);

    expect(child.text()).toContain('Hello world');
  });

  describe('when the window is mobile size', () => {
    it('should display children in a Modal', () => {
      Object.defineProperty(global.window, 'innerWidth', { value: 500 });
      props = { children: 'WAAAAAA' };
      component = shallow(<Tooltip {...props} />);
      expect(component.find(Modal).children().text()).toEqual('WAAAAAA');
    });
  });

  describe('when the window is tablet or desktop size', () => {
    const event = { stopPropagation: jest.fn() };
    const handleClickMock = jest.fn();

    beforeEach(() => {
      Object.defineProperty(global.window, 'innerWidth', { value: 1100 });
      props = { revealOnClick: true };
    });

    describe('and revealOnClick prop is present', () => {
      it('should call handleClick() when clicked', () => {
        component = mount(<Tooltip {...props} />);
        component.instance().handleClick(event);

        expect(component.state().modalIsOpen).toEqual(false);
        expect(component.state().visible).toEqual(true);
      });
    });

    describe('and revealOnClick prop is not present', () => {
      it('should not call handleClick()', () => {
        component = shallow(<Tooltip {...props} />);
        component.setProps({ revealOnClick: false });
        component.instance().handleClick(event);
        expect(handleClickMock).not.toHaveBeenCalled();
      });
    });
  });
});
