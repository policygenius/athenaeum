import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Close from './Icons/Close';
import Hamburger from './Icons/Hamburger';

import styles from './main_nav_search.module.scss';

function Search(props) {
  const {
    searching,
    toggleSearching,
    toggleMobileMenu,
    showMobileMenu,
  } = props;

  const classes = [
    styles['search'],
    searching && styles['searching']
  ];

  return (
    <div className={classnames(...classes)}>
      <div
        className={styles['search-icon']}
        onClick={() => toggleSearching(true)}
      />

      <div
        className={classnames(styles['search-icon-mobile'], 'st-search-show-outputs')}
      />

      <input
        className={styles['input']}
        data-search-input=''
        id='swiftype-search'
        name='query'
        placeholder='e.g. What is life insurance?'
        type='text'
      />

      <div className={styles['icon-group']}>
        <Close
          onClick={toggleSearching}
          searching={searching}
        />

        <Hamburger
          showMobileMenu={showMobileMenu}
          onClick={toggleMobileMenu}
        />
      </div>
    </div>
  );
}

Search.propTypes = {
  searching: PropTypes.bool,
  toggleSearching: PropTypes.func,
  toggleMobileMenu: PropTypes.func,
  showMobileMenu: PropTypes.bool,
};

export default Search;
