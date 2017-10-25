import React from 'react';
import { shallow } from 'enzyme';

import ProductDisplay from '../';
import SubMenuList from '../../SubMenuList';
import ProductArticleList from '../../ArticleList/Product';
import Intro from '../../Intro';

describe('<ProductDisplay />', () => {
  describe('rendering', () => {
    it('renders <Intro /> with props', () => {
      const props = {
        intro: {
          cta: 'test',
          imgSrc: 'test-src',
          linkHref: 'test-link/',
        },
        list: {
          type: 'links',
          items: [],
        },
        active: 'test-active',
        activeName: 'test-activeName',
      };

      const wrapper = shallow(<ProductDisplay {...props} />);

      const intro = wrapper.find(Intro);

      expect(intro.length).toEqual(1);
      expect(intro.props().cta).toEqual(props.intro.cta);
      expect(intro.props().imgSrc).toEqual(props.intro.imgSrc);
      expect(intro.props().linkHref).toEqual(props.intro.linkHref);
    });

    describe('list', () => {
      it('renders <SubMenuList /> if list type is links', () => {
        const props = {
          intro: {
            cta: 'test',
            imgSrc: 'test-src',
            linkHref: 'test-link/',
          },
          list: {
            type: 'links',
            items: [
              {
                header: 'test-header',
                items: [],
              },
            ],
          },
          active: 'test-active',
          activeName: 'test-activeName',
        };

        const wrapper = shallow(<ProductDisplay {...props} />);

        expect(wrapper.find(SubMenuList).length).toEqual(1);
        expect(wrapper.find(ProductArticleList).length).toEqual(0);
      });

      it('renders <ProductArticleList /> if list type is articles', () => {
        const props = {
          intro: {
            cta: 'test',
            imgSrc: 'test-src',
            linkHref: 'test-link/',
          },
          list: {
            type: 'articles',
            alt: 'test-alt',
            items: [],
          },
          active: 'test-active',
          activeName: 'test-activeName',
        };

        const wrapper = shallow(<ProductDisplay {...props} />);

        expect(wrapper.find(ProductArticleList).length).toEqual(1);
        expect(wrapper.find(SubMenuList).length).toEqual(0);
      });
    });
  });
});
