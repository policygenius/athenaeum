import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from '../../app/containers/App';

describe ( 'App container', () => {
  it ( 'renders to the DOM', () => {
    let app = shallow( <App /> );
    expect( app ).to.exist;
  });
});
