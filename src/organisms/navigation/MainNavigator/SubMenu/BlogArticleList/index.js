import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Text from 'atoms/Text';
import LinkWrapper from 'atoms/LinkWrapper';
import Layout from 'atoms/Layout';

import styles from './main_nav_blog_article_list.module.scss';

class BlogArticleList extends Component {
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
      active,
    } = this.props;

    return (
      <li className={styles['blog-articles']}>
        <Layout
          smallCols={[ 12 ]}
          mediumCols={[ 6, 6, 12 ]}
          largeCols={[ 4 ]}
          className={styles['grid']}
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
                <div
                  className={styles['article-wrapper']}
                  key={item.subHeader}
                >
                  <LinkWrapper
                    href={item.link}
                    className={styles['link']}
                    variant='no-text-decoration'
                  >
                    <figure
                      className={styles['figure']}
                    >
                      <img
                        alt={alt}
                        className={styles['image']}
                        {...imgProps}
                      />

                      <figcaption>
                        <Text
                          type={7}
                          semibold
                          color='neutral-3'
                          className={styles['tag']}
                        >
                          { item.header }
                        </Text>

                        <Text
                          tag='h3'
                          type={6}
                          color='neutral-2'
                          className={styles['sub-tag']}
                        >
                          { item.subHeader }
                        </Text>
                      </figcaption>
                    </figure>
                  </LinkWrapper>
                </div>
              );
            })
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
