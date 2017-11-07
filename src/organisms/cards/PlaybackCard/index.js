import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ImageAside from 'molecules/asides/ImageAside';
import Layout, { Col } from 'atoms/Layout';
import LinkWrapper from 'atoms/LinkWrapper';
import Text from 'atoms/Text';

import styles from './playback_card.module.scss';

function PlaybackCard(props) {
  const {
    header,
    leftPanel,
    rightPanel,
    onClick,
    icon,
    editLinkText,
  } = props;

  return (
    <div className={classnames(styles['playback-card'])}>
      <Layout
        smallCols={[ 9, 3 ]}
        bottomSpacing='xSmall'
        fullwidth
      >
        <ImageAside bold icon={icon} header={header} />
        <Col className={styles['edit-column']}>
          <LinkWrapper
            onClick={onClick}
            className={styles['edit']}
          >
            <Text
              tag='span'
              type={7}
            >
              { editLinkText }
            </Text>
          </LinkWrapper>
        </Col>
      </Layout>
      <Layout mediumCols={[ 8, 4 ]} fullwidth>
        <Col>{ leftPanel }</Col>
        <Col>{ rightPanel }</Col>
      </Layout>
    </div>
  );
}

PlaybackCard.propTypes = {
  /**
   * Text for the header of the playback card
   */
  header: PropTypes.string.isRequired,
  /**
   * Callback for edit link
   */
  onClick: PropTypes.func.isRequired,
  /**
   * This is the icon name from the [Icon component](/#icon).
   */
  icon: PropTypes.string,

  /**
   * Left Panel node
   */
  leftPanel: PropTypes.node,
  /**
   * Right Panel node
   */
  rightPanel: PropTypes.node,

  /**
   * text displayed for the Edit link
   */
  editLinkText: PropTypes.string,
};

PlaybackCard.defaultProps = {
  editLinkText: 'Edit'
};

export default PlaybackCard;
