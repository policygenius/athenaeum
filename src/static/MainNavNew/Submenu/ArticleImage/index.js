import React from 'react';
import PropTypes from 'prop-types';

import Text from 'atoms/Text';
import LinkWrapper from 'atoms/LinkWrapper';
import Spacer from 'atoms/Spacer';

import styles from './article_image.module.scss';

function ArticleImage(props) {
  const {
    link,
    imgProps,
    header,
  } = props;

  return (
    <LinkWrapper
      href={link}
      variant='no-text-decoration'
      className={styles['article-image-wrapper']}
    >
      <div
        className={styles['article-image-figure']}
      >
        <img
          className={styles['article-image']}
          role='presentation'
          {...imgProps}
        />

      </div>
      <Spacer size={18} />
      <Text
        type={8}
        font='a'
        color='neutral-1'
        className={styles['article-image-header']}
      >
        { header }
      </Text>
    </LinkWrapper>
  );
}

ArticleImage.propTypes = {
  link: PropTypes.string,
  imgProps: PropTypes.object,
  header: PropTypes.string,
};

export default ArticleImage;
