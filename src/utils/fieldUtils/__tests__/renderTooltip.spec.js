import { mount } from 'enzyme';

import Icon from 'atoms/Icon';
import Modal from 'molecules/Modal';
import { renderTooltip } from '../';

describe('renderTooltip()', () => {
  let className;
  let iconClassName;

  beforeEach(() => {
    className = 'test-class';
    iconClassName = 'test-icon-class';
  });

  describe('Tooltip', () => {
    describe('tooltip is a string', () => {
      it('returns Tooltip with tooltip argument as its child and in Modal', () => {
        const tooltip = 'Hello world';

        const component = renderTooltip(tooltip, className, iconClassName);
        const wrapper = mount(component);
        const tooltipElement = wrapper.children().childAt(0);
        const modalElement = wrapper.children().childAt(1);

        expect(tooltipElement.props().className).toContain(className);
        expect(tooltipElement.props().children.filter(child => child.props.children === tooltip && child.type !== Modal).length).toEqual(1);
        expect(modalElement.length).toEqual(1);
      });
    });

    describe('tooltip is a function', () => {
      it('returns Tooltip with tooltip argument as onClick', () => {
        const tooltip = jest.fn();

        const component = renderTooltip(tooltip, className, iconClassName);
        const wrapper = mount(component);
        const tooltipElement = wrapper.children().childAt(0);

        expect(tooltipElement.props().onClick).toEqual(tooltip);
      });
    });
  });

  describe('Icon', () => {
    it('renders Icon with tooltip icon prop and passed in iconClassName', () => {
      const tooltip = 'Hello world';

      const component = renderTooltip(tooltip, className, iconClassName);
      const wrapper = mount(component);

      const icon = wrapper.findWhere(n => n.type() === Icon);

      expect(icon.props().icon).toEqual('tooltip');
      expect(icon.props().className).toContain(iconClassName);
    });
  });
});
