import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Layout from 'atoms/Layout';

import ArticleImage from '../../ArticleImage';

import sharedStyles from '../shared/main_nav_article_list.module.scss';

class ProductArticleList extends Component {
  constructor() {
    super();

    this.state = {
      loadImg: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.active && !this.state.loadImg) {
      this.setState({ loadImg: true });
    }
  }

  render() {
    const {
      data,
      alt,
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
          className={sharedStyles['grid']}
        >
          {
            data.map((item) => {
              const imgProps = {
                'data-src': item.imageSrc,
              };

              if (this.state.loadImg) {
                imgProps.src = item.imageSrc;
              }

              return (
                <ArticleImage
                  subHeader={item.subHeader}
                  header={item.header}
                  imgProps={imgProps}
                  alt={alt}
                  link={item.link}
                />
              );
            })
          }
        </Layout>
      </li>
    );
  }
}

ProductArticleList.propTypes = {
  data: PropTypes.array,
  alt: PropTypes.string,
  className: PropTypes.string,
  active: PropTypes.bool,
};


export default ProductArticleList;
