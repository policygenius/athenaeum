import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Button from 'atoms/Button';
import Layout from 'atoms/Layout';

import GeneralForm, {
  isButton,
  processFormChildren,
  renderChildren
} from 'organisms/forms/GeneralForm';

describe('GeneralForm', () => {

  describe('isButton', () => {
    it('checks if a component is a "Button"', () => {
      const childA = <Button />;
      const childB = <GeneralForm formName='' />;

      expect(isButton(childA)).to.be.true;
      expect(isButton(childB)).to.be.false;
    });

  });

  describe('processFormChildren', () => {

    it('adds appropriate styles to children', () => {
      const wrapper = shallow(
        <div>
          <div />
          <div />
          <Button />
        </div>
      );

      const children = wrapper.children();
      const formName = 'Example Name';
      const processedChildren = processFormChildren(children, formName);

      const processedWrapper = shallow(
        <div>
          { processedChildren }
        </div>
      );

      expect(processedWrapper.find('.form-item')).to.have.length(3);
      expect(processedWrapper.find('.form-button')).to.have.length(1);
      expect(processedWrapper.find({ htmlFor: 'Example Name' })).to.have.length(3);
    });

  });

  describe('renderChildren', () => {

    it('sends Layout children to be processed', () => {
      const wrapper = shallow(
        <div>
          <Layout>
            <div />
            <div />
            <Button />
          </Layout>
        </div>
      );

      const children = wrapper.children();
      const formName = 'Example Name';

      const processedWrapper = shallow(
        <div>
          { renderChildren(children, formName) }
        </div>
      );

      expect(processedWrapper.find('.form-item')).to.have.length(3);
      expect(processedWrapper.find('.form-button')).to.have.length(1);
      expect(processedWrapper.find({ htmlFor: 'Example Name' })).to.have.length(3);
      expect(processedWrapper.hasClass('form-item')).to.be.false;

    });

  });

});
