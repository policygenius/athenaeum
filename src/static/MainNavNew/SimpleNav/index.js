import React from 'react';
import PropTypes from 'prop-types';

import Text from 'atoms/Text';

import styles from './simple_nav.module.scss';

function SimpleNav(props) {
  const {
    regularPrimaryText,
    boldPrimaryText,
    secondaryText
  } = props;

  return (
    <div
      className={styles['simple-nav']}
    >
      <div
        className={styles['simple-nav-content']}
      >
        <Text
          type={10}
          font='b'
          variant='italics'
        >
          { regularPrimaryText } <Text tag='span' type={10} font='a'>{ boldPrimaryText }</Text>
        </Text>
        <Text
          type={10}
          font='a'
          className={styles['secondary-text-wrapper']}
        >
          { secondaryText }
        </Text>
      </div>
    </div>
  );
}

SimpleNav.propTypes = {
  regularPrimaryText: PropTypes.string,
  boldPrimaryText: PropTypes.string,
  secondaryText: PropTypes.string,
};

export default SimpleNav;
