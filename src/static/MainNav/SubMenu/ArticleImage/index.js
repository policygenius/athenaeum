import React from 'react';

import Text from 'atoms/Text';
import LinkWrapper from 'atoms/LinkWrapper';

import styles from './main_nav_article_image.module.scss';

function ArticleImage(props) {
  const {
    subHeader,
    header,
    imgProps,
    alt,
    link,
  } = props;

  return (
    <div
      className={styles['article-wrapper']}
      key={subHeader}
    >
      <LinkWrapper
        href={link}
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
            { header &&
                <Text
                  type={7}
                  semibold
                  color='neutral-3'
                  className={styles['tag']}
                >
                  { header }
                </Text>
            }

            <Text
              tag='h3'
              type={6}
              color='neutral-2'
              className={styles['sub-tag']}
            >
              { subHeader }
            </Text>
          </figcaption>
        </figure>
      </LinkWrapper>
    </div>
  );
};

export default ArticleImage;
