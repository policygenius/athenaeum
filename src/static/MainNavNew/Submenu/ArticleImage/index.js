import React from 'react';
import PropTypes from 'prop-types';

import Text from 'atoms/Text';
import LinkWrapper from 'atoms/LinkWrapper';
import Spacer from 'atoms/Spacer';
import StyledWrapper from 'atoms/StyledWrapper';

import { wrapper, image } from './styles';

function ArticleImage(props) {
  const {
    link,
    imgProps,
    header,
  } = props;

  return (
    <StyledWrapper
      css={wrapper}
      component={LinkWrapper}
      href={link}
      variant='no-text-decoration'
    >
      <figure>
        <StyledWrapper
          css={image}
          component='img'
          {...imgProps}
        />

        <Spacer size={18} />

        <figcaption>
          <Text
            type={8}
            font='a'
            color='neutral-1'
          >
            { header }
          </Text>
        </figcaption>
      </figure>
    </StyledWrapper>
  );
}

ArticleImage.propTypes = {
  link: PropTypes.string,
  imgProps: PropTypes.object,
  header: PropTypes.string,
};

export default ArticleImage;
