import React from 'react';
import { shallow } from 'enzyme';

import ProductArticleList from '../Product';
import ArticleImage from '../../ArticleImage';

describe('<ProductArticleList />', () => {
  describe('rendering', () => {
    it('renders <ArticleImage /> for each item', () => {
      const props = {
        data: [
          {
            header: 'test',
            subHeader: 'sub-test',
            imageSrc: 'test-source',
            link: 'test-link',
          },
        ],
        alt: 'test',
      };

      const wrapper = shallow(<ProductArticleList {...props} />);

      expect(wrapper.find(ArticleImage).length).toEqual(1);
      expect(wrapper.find(ArticleImage).findWhere(n => n.node.props.header === 'test').length).toEqual(1);
    });
  });
});
