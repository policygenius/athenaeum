import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from 'atoms/Icon';
import styles from './mobile_header.module.scss';

function MobileHeader(props) {
  const {
    className,
    text,
    quote,
    dropdown,
  } = props;

  const classes = [
    styles['mobile-header'],
    className,
  ];

  return (
    <div className={classnames(...classes)}>
      <div className={styles['main-text']}>
        {text}
      </div>

      {
        quote &&
          <div className={styles['quote']}>
            {quote}
          </div>
      }

      {
        dropdown &&
          <div
            onClick={dropdown.onClick}
            className={styles['dropdown']}
          >
            <Icon
              icon={dropdown.menuActive ? 'upRebrand' : 'downRebrand'}
              height='8px'
              width='14px'
            />
          </div>
      }
    </div>
  );
}


MobileHeader.propTypes = {
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,

  /**
   * Main text for header. Centered when alone, left aligned when with other content
   */
  text: PropTypes.node,

  /**
   * Quote information displayed, right aligned
   */
  quote: PropTypes.node,

  /**
   * Allows for dropdown icon in header, right aligned
   */
  dropdown: PropTypes.shape({
    menuActive: PropTypes.bool,
    onClick: PropTypes.func,
  }),
};

MobileHeader.defaultProps = {
  // Place any default props here.
};

export default MobileHeader;
