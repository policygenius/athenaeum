import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Sticky from 'react-stickynode';
import Icon from 'atoms/Icon';
import Layout from 'atoms/Layout';
import Col from 'atoms/Layout/Col';
import colors from 'atoms/Color/colors.scss';

import styles from './user_alert.module.scss';

function UserAlert(props) {
  const {
    children,
    className,
    alertColor,
    closeColor,
    alertTop,
    alertBottom,
    onClick,
    innerZ,
    enabled
  } = props;

  const classes = [
    styles['user-alert'],
    className,
  ];

  return (
    <Sticky
      enabled={enabled}
      top={alertTop}
      bottomBoundary={alertBottom}
      innerZ={innerZ}
    >
      <div className={colors[`background-${alertColor}`]}>
        <div className={classnames(...classes)}>
          <Layout
            smallCols={[ 1, 10, 1 ]}
          >
            <div />
            <Col
              fullwidth
              className={styles['content']}
            >
              { children }
            </Col>
            <Col
              fullwidth
              className={styles['close-wrapper']}
            >
              <Icon
                icon='closeAccent'
                onClick={onClick}
                className={styles[`close-stroke-${closeColor}`]}
                width='12px'
                height='12px'
              />
            </Col>
          </Layout>
        </div>
      </div>
    </Sticky>
  );
}

UserAlert.propTypes = {

  /**
   * sets background color for alert, must use our branded colors
   */
  alertColor: PropTypes.string,

  /**
   * sets color for X icon; must use our branded colors
   */
  closeColor: PropTypes.string,

  /**
   * this determines the top for the sticky component, can be a number or string representing a node
   */
  alertTop: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),

  /**
   * this determines the bottom boundary for the sticky component, can be a number or string represening a node
   */
  alertBottom: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),

  /**
   * z-index for sticky component
   */
  innerZ: PropTypes.number,

  /**
   * determines if sticky component is sticky or not
   */
  enabled: PropTypes.bool,

  /**
   * click handler for the close icon
   */
  onClick: PropTypes.func,

  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,
};

UserAlert.defaultProps = {
  alertColor: 'accent-2',
  alertTop: 0,
  closeColor: 'accent-1',
  enabled: true,

  // Place any default props here.
};

export default UserAlert;
