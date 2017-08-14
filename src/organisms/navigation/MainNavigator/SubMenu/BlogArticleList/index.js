import React from 'react';
import PropTypes from 'prop-types';

import Text from 'atoms/Text';
import LinkWrapper from 'atoms/LinkWrapper';
import Layout from 'atoms/Layout';

import styles from './main_nav_blog_article_list.module.scss';

function BlogArticleList(props) {
  const {
    data,
    alt,
  } = props;

  return (
    <li className={styles['blog-articles']}>
      <Layout
        smallCols={[ 12 ]}
        mediumCols={[ 6, 6, 12 ]}
        largeCols={[ 4 ]}
        className={styles['grid']}
      >
        {
          data.map(item =>
            <div
              className={styles['article-wrapper']}
              key={item.subHeader}
            >
              <LinkWrapper
                data-behavior='TrackAnalyticsOnClick'
                data-analytics-event-data={`{&quot;name&quot;:&quot;Used main nav&quot;,&quot;properties&quot;:{&quot;navigateTo&quot;:&quot;${item.href}&quot;,&quot;navigateFrom&quot;:&quot;/templates/main_nav&quot;,&quot;clickedFrom&quot;:&quot;mega menu&quot;}}`}
                href={item.link}
                className={styles['link']}
                variant='no-text-decoration'
              >
                <figure>
                  <img
                    alt={alt}
                    src={item.imageSrc}
                    className={styles['image']}
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
          )
        }
      </Layout>
    </li>
  );
}

BlogArticleList.propTypes = {
  data: PropTypes.array,
  alt: PropTypes.string,
};


export default BlogArticleList;
