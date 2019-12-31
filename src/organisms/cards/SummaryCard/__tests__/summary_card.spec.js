import React from 'react';
import renderer from 'react-test-renderer';

import SummaryCard from 'organisms/cards/SummaryCard';

describe('<SummaryCard />', () => {
  let props;

  beforeEach(() => {
    props = {
      text: [
        { header: 'header', subheader: 'subheader' }, { header: 'secondaryHeader', subheader: 'another subhead' }
      ],
      icon: 'xIcon',
      onIconClick: jest.fn(),
      footerLinks: [
        { text: 'A link', onClick: jest.fn() }, { text: 'second link', onClick: jest.fn() }
      ]
    };
  });

  it('renders correctly', () => {
    const actual = renderer.create(<SummaryCard {...props} />).toJSON();

    expect(actual).toMatchSnapshot();
  });
});
