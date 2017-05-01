import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';

import Icon from 'atoms/Icon';
import StepProgress from 'molecules/StepProgress';
import ContactCard from 'organisms/cards/ContactCard';
import TextComponent from 'atoms/TextComponent';

import Navigator from 'templates/Navigator';
import NavigatorPartials from 'templates/Navigator/NavigatorPartials';

describe('Navigator', () => {

  describe('Partials', () => {

    it('has a StepProgress partial', () => {
      const partial = NavigatorPartials.stepProgress([]);

      expect(partial.type).to.equal(StepProgress);
    });

    it('has a ContactCard partial', () => {
      const partial = NavigatorPartials.contactCard();

      expect(partial.type).to.equal(ContactCard);
    });

    it('has a Icon partial', () => {
      const partial = NavigatorPartials.icon();

      expect(partial.type).to.equal(Icon);
    });

    it('has a TextComponent partial', () => {
      const partial = NavigatorPartials.railText();

      expect(partial.type).to.equal(TextComponent);
    });

  });

  describe('Exported Partials', () => {
    let props;

    beforeEach(() => {
      props = {
        data: [],
        leftRailText: 'Left Rail Text',
      };
    });

    it('should render `main` children when passed in', () => {
      const wrapper = shallow(
        <Navigator {...props}>
          <div className='unique' />
        </Navigator>
      );

      expect(wrapper.contains(<div className='unique' />)).to.be.true;
    });

    it('should render `sidebar` children when passed in', () => {
      const wrapper = shallow(
        <Navigator {...props}>
          <Navigator.Sidebar>
            <div className='unique' />
          </Navigator.Sidebar>
        </Navigator>
      );

      expect(wrapper.find('.sidebar')).to.have.length(1);
      expect(wrapper.contains(<div className='unique' />)).to.be.true;
    });

  });

  describe('Render', () => {
    let props;

    beforeEach(() => {
      props = {
        data: [],
        leftRailText: 'Left Rail Text',
      };
    });

    xit('should render an Icon component', () => {
      // jest.dontMock('templates/Navigator/NavigatorPartials');

      const renderStub = sinon.stub(NavigatorPartials, 'icon');
      // const wrapper = shallow(<Navigator {...props} />);
      // const spy = jest.spyOn(NavigatorPartials, 'icon');

      shallow(<Navigator {...props} />);

      // NavigatorPartials.icon();
      expect(renderStub.called).to.be.true;
      renderStub.restore();
    });

    xit('should render a StepProgress component', () => {
      const renderStub = sinon.stub(NavigatorPartials, 'stepProgress');

      props.data = [
        { complete: true, icon: 'calculator', label: 'Aenean', link: '#' },
        { complete: true, icon: 'health', label: 'Phasellus', link: '#' }
      ];

      // const wrapper = shallow(<Navigator {...props} />);
      NavigatorPartials.stepProgress();
      expect(renderStub.called).to.be.true;
      renderStub.restore();
    });

    xit('should render a ContactCard component', () => {
      const renderSpy = sinon.spy(NavigatorPartials, 'contactCard');
      const wrapper = shallow(<Navigator {...props} />);

      NavigatorPartials.contactCard();
      expect(wrapper.contains('.contact-card')).to.be.true;
      expect(renderSpy.called).to.be.true;
      renderSpy.restore();
    });

    it('should render railText', () => {
      const wrapper = shallow(<Navigator {...props} />);

      expect(wrapper.contains(props.leftRailText)).to.be.true;
    });
  });

});
