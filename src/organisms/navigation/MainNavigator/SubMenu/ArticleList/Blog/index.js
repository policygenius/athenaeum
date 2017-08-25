import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Text from 'atoms/Text';
import LinkWrapper from 'atoms/LinkWrapper';
import Layout from 'atoms/Layout';

import ArticleImage from '../../ArticleImage';
import SubMenuList from '../../SubMenuList';

import sharedStyles from '../shared/main_nav_article_list.module.scss';
import styles from './main_nav_blog_article_list.module.scss';

class BlogArticleList extends Component {
  constructor() {
    super();
  }

  renderItem = (item) => {
    if (item.type === 'list') {
      return (
        <SubMenuList
          header={item.header}
          listItems={item.posts}
          className={styles['submenu-list']}
        />
      );
    }

    if (item.type === 'featured') {
      const imgProps = {
        'src': `${item.post.feature_image}?fit=crop&w=640&h=360`,
      };

      return (
        <ArticleImage
          subHeader={item.post.title}
          imgProps={imgProps}
          link={item.post.url}
        />
      );
    }

    return null;
  }

  render() {
    const {
      data,
      alt,
      active,
      className,
    } = this.props;

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
        >
          {
            data.map(item => this.renderItem(item))
          }
        </Layout>
      </li>
    );
  }
}

BlogArticleList.propTypes = {
  data: PropTypes.array,
  alt: PropTypes.string,
};


export default BlogArticleList;
