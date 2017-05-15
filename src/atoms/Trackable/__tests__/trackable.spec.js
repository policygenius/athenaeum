import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import Trackable from 'atoms/Trackable';
import { dataAttributes, dataAttrName } from 'atoms/Trackable/utils';

describe('<Trackable />', () => {

  describe('dataAttributes()', () => {

    it('takes a string and returns a lower+kebab case prefixed with data-', () => {
      expect(dataAttrName('SoMe Name')).to.be.equal('data-some-name');
    });

    it('takes an object and returns data-attributes', () => {
      const data = { name: 100, noName: 101 };
      const dataAttr = dataAttributes(data);
      const dataKeys = Object.keys(data);
      const attrKeys = Object.keys(dataAttr);

      expect(attrKeys.length).to.equal(dataKeys.length);
      expect(attrKeys.includes(`data-${dataKeys[0]}`)).to.be.true;
    });
  });

  describe('renders', () => {

    it('child with data-attributes', () => {
      const data = { test: 100, womp: 1337 };
      const wrapper = shallow(
        <Trackable data={data}>
          <div />
        </Trackable>
      );

      expect(wrapper.contains(<div data-test={data.test} data-womp={data.womp}></div>)).to.be.true;
    });

    it('does not render nested Trackables', () => {
      const data1 = { womp: 101 };
      const data2 = { womp: 1337 };

      const wrapper = mount(
        <Trackable data={data2}>
          <Trackable data={data1}>
            <div />
          </Trackable>
        </Trackable>
      );

      expect(wrapper.contains(<div data-womp={101}></div>)).to.be.true;
    });
  });

});
