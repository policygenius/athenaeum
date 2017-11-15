import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from 'atoms/Icon';
import Text from 'atoms/Text';
import LinkWrapper from 'atoms/LinkWrapper';
import Spacer from 'atoms/Spacer';

import styles from './blog_intro.module.scss';

class BlogIntro extends Component {
  get introText() {
    const { intro, headerText } = this.props;

    if (intro.textType === 'latest') {
      return (
        <div
          className={styles['latest-text']}
        >
          <Text
            type={4}
            font='a'
          >
            {headerText}
          </Text>
        </div>
      );
    }

    return (
      <Icon
        icon={`${intro.textType}genius`}
        width={intro.width}
        height='38px'
      />
    );
  }

  render() {
    const {
      intro,
    } = this.props;

    return (
      <div
        fullwidth
        className={styles['blog-intro']}
      >
        { this.introText }

        <Spacer size={18} />

        <LinkWrapper type='secondary' href={intro.link}>
          <Text type={10} font='b'>
            View All
          </Text>
        </LinkWrapper>
      </div>
    );
  }
}

BlogIntro.propTypes = {
  intro: PropTypes.shape({
    textType: PropTypes.string,
    link: PropTypes.string,
    width: PropTypes.string,
  }),
  headerText: PropTypes.string,
};

export default BlogIntro;
