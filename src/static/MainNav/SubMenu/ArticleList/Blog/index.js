import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Layout from 'atoms/Layout';

import ArticleImage from '../../ArticleImage';
import LoadingImage from '../../Loading/LoadingImage';
import LoadingList from '../../Loading/LoadingList';
import SubMenuList from '../../SubMenuList';
import fullBlogUrl from '../../../utils/fullBlogUrl';

import sharedStyles from '../shared/main_nav_article_list.module.scss';
import styles from './main_nav_blog_article_list.module.scss';

class BlogArticleList extends Component {
  renderItem = (item) => {
    if (item.type === 'list') {
      if (this.props.loading) {
        return (
          <LoadingList />
        );
      }

      return (
        <ul className={styles['submenu-list-wrapper']}>
          <SubMenuList
            header={item.header}
            listItems={item.posts}
            className={styles['submenu-list']}
          />
        </ul>
      );
    }

    if (item.type === 'featured') {
      if (this.props.loading) {
        return (
          <LoadingImage />
        );
      }

      return (
        <ArticleImage
          key={item.post.title}
          subHeader={item.post.title}
          imgProps={{
            src: `${item.post.feature_image}?fit=crop&w=640&h=360`,
          }}
          link={fullBlogUrl(item.post.url)}
        />
      );
    }

    return null;
  }

  render() {
    const {
      data,
      className,
    } = this.props;

    let blogItems = data;

    if (this.props.loading) {
      blogItems = [ { type: 'list' }, { type: 'featured' }, { type: 'featured' } ];
    }

    const classes = [
      sharedStyles['blog-articles'],
      className,
    ];

    return (
      <li className={classnames(...classes)}>
        <Layout
          smallCols={[ 12 ]}
          mediumCols={[ 6, 6, 12 ]}
          largeCols={[ 4 ]}
          className={sharedStyles['grid']}
        >
          {
            blogItems.map(item => this.renderItem(item))
          }
        </Layout>
      </li>
    );
  }
}

BlogArticleList.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
  className: PropTypes.string,
};


export default BlogArticleList;
