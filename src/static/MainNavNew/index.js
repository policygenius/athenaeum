import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import reduce from 'lodash/reduce';

import styles from './main_nav.module.scss';

import Logo from './Logo';
import Menu from './Menu';
import Search from './Search';
import SimpleNav from './SimpleNav';

import urlMatchData from './data/urlMatchData';

class MainNavNew extends Component {
  constructor() {
    super();

    this.state = {
      activePrimaryTab: null,
      searching: false,
      showMobileMenu: false,
      mobileCollapsedMenu: null,
    };
  }

  componentDidMount() {
    const currentPath = window.location.pathname;

    const activeTab = reduce(urlMatchData, (res, data) => {
      let active = res;

      if (data.regex.test(currentPath)) {
        active = data.active;
      }

      return active;
    }, 'insurance');

    this.setActivePrimaryTab(activeTab);
  }

  setActivePrimaryTab = (activePrimaryTab) => {
    if (activePrimaryTab === this.state.activePrimaryTab) {
      this.setState({ activePrimaryTab: null });
    } else {
      this.setState({ activePrimaryTab });
    }
  }

  setMobileCollapsedMenu = (mobileCollapsedMenu) => {
    this.setState({ mobileCollapsedMenu });
  }

  get fullNav() {
    return (
      <div className={styles['panel-wrapper']}>
        <Menu
          setActivePrimaryTab={this.setActivePrimaryTab}
          setMobileCollapsedMenu={this.setMobileCollapsedMenu}
          {...this.state}
        />

        <Search
          searching={this.state.searching}
          toggleSearching={this.toggleSearching}
          toggleMobileMenu={this.toggleMobileMenu}
          showMobileMenu={this.state.showMobileMenu}
          setActivePrimaryTab={this.setActivePrimaryTab}
        />
      </div>
    );
  }

  get simpleNav() {
    return (
      <SimpleNav {...this.props} />
    );
  }

  toggleMobileMenu = (toggle) => {
    setTimeout(() => {
      this.setState({
        mobileCollapsedMenu: null,
      });
    }, 500);

    // prevents document behind mobile nav menu from scrolling
    if (toggle) {
      setTimeout(() => {
        document.body.style.margin = 0;
        document.body.style.height = '100%';
        document.body.style.overflow = 'hidden';
      }, 2000);
    } else {
      document.body.style.margin = '';
      document.body.style.height = '';
      document.body.style.overflow = '';
    }

    this.setState({
      showMobileMenu: toggle
    });
  }

  toggleSearching = (toggle) => {
    this.setState({ searching: toggle });
  }

  render() {
    const mainPanelClasses = classnames(
      styles['main-panel'],
      this.state.searching && styles.searching,
      this.state.showMobileMenu && styles['show-mobile-menu']
    );

    return (
      <nav className={styles.wrapper}>
        <div className={mainPanelClasses} style={{ zIndex: '100' }}>
          <div className={styles.container}>
            <Logo />

            { this.props.simpleNav ? this.simpleNav : this.fullNav }

          </div>
        </div>
      </nav>
    );
  }
}

MainNavNew.propTypes = {
  simpleNav: PropTypes.bool,
};

export default MainNavNew;
