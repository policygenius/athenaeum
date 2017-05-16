import React from 'react';
import PropTypes from 'prop-types';
import { Partial, separatePartials, partialRenderer } from 'helpers/Partial';
import ImageAside from 'molecules/asides/ImageAside';
import Layout from 'atoms/Layout';
import Col from 'atoms/Layout/Col';
import LinkWrapper from 'atoms/LinkWrapper';

import PlaybackCardPartials from './PlaybackCardPartials';
import styles from './playback_card.module.scss';

function PlaybackCard(props) {
  const {
    children,
    header,
    onClick
  } = props;

  const parts = separatePartials(children);
  const renderPartial = partialRenderer(PlaybackCardPartials);

  return (
    <div className={styles['playback-card']}>
      <Layout
        smallCols={[ 11, 1 ]}
        bottomSpacing='xSmall'
        fullwidth
      >
        <ImageAside
          bold
          icon='greenCheckWithCircle'
          header={header}
        />
        <Col className={styles['edit-column']}>
          <LinkWrapper
            onClick={onClick}
            className={styles.edit}
          >
            Edit
          </LinkWrapper>
        </Col>
      </Layout>
      <Layout mediumCols={[ 8, 4 ]} fullwidth>
        { renderPartial('leftPanel', parts.LeftPanel) }
        { renderPartial('rightPanel', parts.RightPanel) }
      </Layout>
    </div>
  );
}

PlaybackCard.LeftPanel = class LeftPanel extends Partial {
  render() {
    return (
      <Layout
        bottomSpacing='xSmall'
        fullwidth
      >
        { this.props.children }
      </Layout>
    );
  }
};
PlaybackCard.RightPanel = class RightPanel extends Partial {
  render() {
    return (
      <Layout
        smallCols={[ 6 ]}
        mediumCols={[ 12 ]}
        bottomSpacing='xSmall'
        fullwidth
      >
        { this.props.children }
      </Layout>
    );
  }
};

PlaybackCard.propTypes = {
  /**
   * Text for the header of the playback card
   */
  header: PropTypes.string.isRequired,
  /**
   * Callback for edit link
   */
  onClick: PropTypes.func.isRequired
};

export default PlaybackCard;
