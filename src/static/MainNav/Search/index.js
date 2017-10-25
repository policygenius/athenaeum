import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  Icon,
  StyledWrapper
} from 'athenaeum';

import styles from './search.module.scss';
import HamburgerClose from './HamburgerClose';
import IconWrapper from './IconWrapper';
import { searchIcon, searchIconMobile, overflowIcon } from './styles';

function Search(props) {
  const {
    searching,
    toggleSearching,
    toggleMobileMenu,
    showMobileMenu,
    setActivePrimaryTab,
  } = props;

  const classes = [
    styles.search,
    searching && styles.searching
  ];

  return (
    <div className={classnames(...classes)}>
      <IconWrapper
        css={searchIcon(props)}
        onClick={() => toggleSearching(true)}
        icon="searchRebrand"
      />

      <input
        className={styles.input}
        data-search-input=""
        id="swiftype-search"
        name="query"
        placeholder="e.g. What is life insurance?"
        type="text"
      />

      <IconWrapper
        css={searchIconMobile(props)}
        className="st-search-show-outputs"
        icon="searchRebrand"
      />

      <HamburgerClose {...props} />

      <IconWrapper
        css={overflowIcon(props)}
        onClick={() => setActivePrimaryTab('about')}
        icon="overflow"
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
