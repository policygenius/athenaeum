import React from 'react';
import { shallow } from 'enzyme';


import BlogArticleList from '../Blog';
import ArticleImage from '../../ArticleImage';
import LoadingImage from '../../Loading/LoadingImage';
import LoadingList from '../../Loading/LoadingList';
import SubMenuList from '../../SubMenuList';

describe('<BlogArticleList />', () => {
  describe('rendering', () => {
    describe('item type is list', () => {
      it('renders <SubMenuList /> when not loading', () => {
        const props = {
          data: [
            {
              type: 'list',
              posts: [],
            }
          ],
          loading: false,
        };
        const wrapper = shallow(<BlogArticleList {...props} />);

        expect(wrapper.find(SubMenuList).length).toEqual(1);
      });

      it('renders <LoadingList /> once for hardcoded data when loading', () => {
        const props = {
          data: [
            {
              type: 'list',
              posts: [],
            }
          ],
          loading: true,
        };
        const wrapper = shallow(<BlogArticleList {...props} />);

        expect(wrapper.find(LoadingList).length).toEqual(1);
      });
    });

    describe('item type is featured', () => {
      it('renders <ArticleImage /> when not loading', () => {
        const props = {
          data: [
            {
              type: 'featured',
              post: {},
            }
          ],
          loading: false,
        };
        const wrapper = shallow(<BlogArticleList {...props} />);

        expect(wrapper.find(ArticleImage).length).toEqual(1);
      });

      it('renders <LoadingImage /> twice for hardcoded data when loading', () => {
        const props = {
          data: [
            {
              type: 'featured',
              post: {},
            }
          ],
          loading: true,
        };
        const wrapper = shallow(<BlogArticleList {...props} />);

        expect(wrapper.find(LoadingImage).length).toEqual(2);
      });
    });
  });
});
