import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

import List from 'atoms/List';
import Icon from 'atoms/Icon';

describe('<List />', () => {

  it('renders', () => {
    const wrapper = mount(<List listItems={[ '' ]} />);

    expect(wrapper.type()).to.equal(List);
    expect(wrapper.find('ul').hasClass('list')).to.be.true;
  });

  it('renders a ul', () => {
    const wrapper = shallow(<List listItems={[ '' ]} />);

    expect(wrapper.type()).to.equal('ul');
  });

  it('uses props correctly', () => {
    const wrapper = shallow(
      <List
        columns={3}
        className='frogstomp'
        condensed
        mini
        noBullets
        numberedList
      />
    );

    expect(wrapper.prop('style')).to.deep.equal({ columns: '3 auto' });
    expect(wrapper.hasClass('frogstomp')).to.be.true;
    expect(wrapper.hasClass('condensed')).to.be.true;
    expect(wrapper.hasClass('mini')).to.be.true;
    expect(wrapper.hasClass('no-bullets')).to.be.true;
    expect(wrapper.type()).to.equal('ol');
  });

  it('renders its children correctly', () => {
    const wrapper = mount(
      <List>
        <strong>New Component Created!</strong>
        <small>
          Now go and write some code! -- <em>You code monkey, you ;).</em>
        </small>
        <List>
          {' I\'m nested!! '}
          <li>{"I'm wrapped in a 'li'"}</li>
          <em>{"I'm wrapped in a 'em'"}</em>
        </List>
      </List>
    );

    expect(wrapper.find('li')).to.have.length(5);
    expect(wrapper.find('ul')).to.have.length(2);
  });

  it('renders its listItems correctly', () => {
    const wrapper = mount(
      <List
        listItems={[
          <strong key={1}>Hope</strong>,
          'Love',
          <List key={2}><em>Peace</em></List>,
          <Icon key={3} icon='health' height='10px' width='20px' />
        ]}
      />
    );

    expect(wrapper.find('li')).to.have.length(4);
    expect(wrapper.find('ul')).to.have.length(2);
  });

  it('renders its listItems after its children', () => {
    const wrapper = shallow(
      <List
        listItems={[
          <strong key={1}>Hope</strong>
        ]}
      >
        Love
      </List>
    );

    expect(wrapper.find('li').first().text()).to.equal('Love');
    expect(wrapper.find('li').last().text()).to.equal('Hope');
  });

});
