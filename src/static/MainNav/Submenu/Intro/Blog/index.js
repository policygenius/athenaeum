import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Icon,
  Text,
  Button,
  LinkWrapper,
  Layout,
  Col,
  Spacer,
  StyledWrapper,
} from 'athenaeum';

import styles from '../intro.module.scss';

class BlogIntro extends Component {
  get introText() {
    const { intro, headerText } = this.props;
    if (intro.textType === 'latest') {
      return (
        <StyledWrapper
          css={() => 'min-height: 42px'}
        >
          <Text
            type={4}
            font="a"
          >
            {headerText}
          </Text>
        </StyledWrapper>
      );
    }

    return (
      <Icon
        icon={`${intro.textType}genius`}
        width={intro.width}
        height="38px"
      />
    );
  }

  render() {
    const {
      intro,
      headerText
    } = this.props;

    return (
      <Layout
        fullwidth
        style={{
          textAlign: 'center'
        }}
      >
        { this.introText }

        <Spacer size={18} />

        <LinkWrapper type="secondary" href={intro.link}>
          <Text type={10} font="b">
            View All
          </Text>
        </LinkWrapper>
      </Layout>
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
