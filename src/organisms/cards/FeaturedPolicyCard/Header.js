import React from 'react';
import PropTypes from 'prop-types';

import styles from './featured_policy_card.module.scss';

const Header = ({ header }) =>
  <div className={styles['header']}>
    {
      header.map((item, idx) =>
        <div
          key={`header-item-${idx}`}
          className={styles['header-item']}
        >
          {item}
        </div>
      )
    }
  </div>

;

Header.propTypes = {
  header: PropTypes.arrayOf(PropTypes.node),
};

export default Header;
