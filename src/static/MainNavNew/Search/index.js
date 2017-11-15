import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './search.module.scss';
import HamburgerClose from './HamburgerClose';
import IconWrapper from './IconWrapper';

function Search(props) {
  const {
    searching,
    toggleSearching,
    setActivePrimaryTab,
  } = props;

  const classes = classnames(
    styles.search,
    searching && styles.searching
  );

  return (
    <div className={classes}>
      <IconWrapper
        onClick={() => toggleSearching(true)}
        icon='searchRebrand'
        className={styles['search-icon']}
      />

      <input
        className={styles.input}
        data-search-input=''
        id='swiftype-search'
        name='query'
        placeholder='e.g. What is life insurance?'
        type='text'
      />

      <IconWrapper
        icon='searchRebrand'
        className={classnames(styles['search-icon-mobile'], 'st-search-show-outputs')}
      />

      <HamburgerClose {...props} />

      <IconWrapper
        onClick={() => setActivePrimaryTab('about')}
        icon='overflow'
        className={styles['overflow-icon']}
      />
    </div>
  );
}

Search.propTypes = {
  searching: PropTypes.bool,
  toggleSearching: PropTypes.func,
  toggleMobileMenu: PropTypes.func,
  showMobileMenu: PropTypes.bool,
  setActivePrimaryTab: PropTypes.func,
};

export default Search;
