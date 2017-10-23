import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import LinkWrapper from 'atoms/LinkWrapper';
import Text from 'atoms/Text';
import Spacer from 'atoms/Spacer';
import Icon from 'atoms/Icon';
import Layout from 'atoms/Layout';
import Col from 'atoms/Layout/Col';

import styles from './summary_card.module.scss';

function formatText(text) {
  let cols = [ 12 ];

  if (text.length > 1) {
    cols = [ 8, 4 ];
  }

  return (
    <Layout
      smallCols={cols}
    >
      {
        text.map((t, idx) =>
          <div
            key={`summary-card-lockup-${idx}`}
          >
            <Text size={5} font='a'>{t.header}</Text>
            <Spacer size={6} />
            <Text size={8} font='b' color='neutral-3'>{t.subheader}</Text>
          </div>
        )
      }
    </Layout>
  );
}

function formatFooter(links) {
  let cols = [ 12 ];

  if (links.length > 1) {
    cols = [ 8, 4 ];
  }

  return (
    <Layout
      smallCols={cols}
      className={styles['footer']}
    >
      {
        links.map((l, idx) =>
          <LinkWrapper
            type='secondary'
            onClick={l.onClick}
            key={`summary-card-footer-${idx}`}
          >
            <Text size={10} font='b' color='primary-3'>
              { l.text }
            </Text>
          </LinkWrapper>
        )
      }
    </Layout>
  );

}

function SummaryCard( props ) {
  const {
    text,
    footerLinks,
    icon,
    onIconClick,
    className,
    children
  } = props;

  const iconProps = {
    icon,
    className: styles['icon'],
  };

  if (onIconClick) {
    iconProps.onClick = onIconClick;
    iconProps.className = classnames(styles['icon'], styles['icon-click']);
  }

  return (
    <div className={classnames(styles['summary-card'], className)}>
      { icon && <Icon {...iconProps} /> }

      <div className={styles['content']}>
        { formatText(text) }

        {
            children &&
              <Col>
                <Spacer size={18} />
                { children }
              </Col>
          }
      </div>

      { footerLinks && formatFooter(footerLinks) }
    </div>
  );
}

SummaryCard.propTypes = {
  /**
   * class name added to class set
   */
  className: PropTypes.string,

  /**
   * Main header text of card
   */
  text: PropTypes.arrayOf(PropTypes.shape({
    header: PropTypes.string,
    subheader: PropTypes.string
  })).isRequired,

  /**
   * Optional footer with corresponding links
   */
  footerLinks: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    onClick: PropTypes.func
  })),

  /**
   * Adds icon to upper right corner. See [Icon](#icon) for available values
   */
  icon: PropTypes.string,

  /**
   * Optional onClick function for icon
   */
  onIconClick: PropTypes.func
};

export default SummaryCard;
