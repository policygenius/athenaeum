import React, { Component } from 'react';
import classnames from 'classnames';
import reduce from 'lodash/reduce';

import Logo from './Logo';
import PrimaryMenuWrapper from './Menu/PrimaryMenuWrapper';
import MenuLink from './Menu/MenuLink';
import Search from './Search';
import SubMenu from './SubMenu';

import styles from './main_nav.module.scss';

import insuranceProducts from './data/products';
import aboutItems from './data/aboutItems';
import magazineItems from './data/magazineItems';
import urlMatchData from './data/urlMatchData';

class MainNav extends Component {
  constructor() {
    super();

    this.state = {
      activePrimaryTab: null,
      activeSubTab: null,
      searching: false,
      showMobileMenu: false,
      mobileCollapsedMenu: null,
    };
  }

  componentDidMount() {
    const currentPath = window.location.pathname;

    const activeTab = reduce(urlMatchData, (res, data) => {
      let active = res;

      if (data.path.includes(currentPath)) {
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

  setActiveSubTab = (activeSubTab) => {
    this.setState({ activeSubTab });
  }

  setMobileCollapsedMenu = (mobileCollapsedMenu) => {
    this.setState({ mobileCollapsedMenu });
  }

  toggleMobileMenu = (toggle) => {
    this.setState({ showMobileMenu: toggle });
  }

  toggleSearching = (toggle) => {
    this.setState({ searching: toggle });
  }

  render() {
    const panelClasses = [
      styles['main-panel'],
      this.state.searching && styles['searching'],
      this.state.showMobileMenu && styles['show-mobile-menu']
    ];

    const primaryPanelClasses = [
      styles['primary-panel'],
      this.state.mobileCollapsedMenu && styles['mobile-collapsed'],
    ];

    return (
      <nav className={styles['wrapper']}>
        <div className={classnames(...panelClasses)}>
          <div className={styles['container']}>
            <Logo />
            <div className={styles['panel-wrapper']}>
              <div className={classnames(...primaryPanelClasses)}>
                <div className={styles['primary-panel-wrapper']}>
                  <ul className={styles['primary-nav']}>
                    <PrimaryMenuWrapper
                      header='Insurance Quotes & Guides'
                      activeName='insurance'
                      searching={this.state.searching}
                      active={this.state.activePrimaryTab}
                      onClick={this.setActivePrimaryTab}
                    >
                      {
                        insuranceProducts.map((product, idx) =>
                          <SubMenu
                            key={`${product.activeName}-${idx}`}
                            menu={product.menu}
                            intro={product.intro}
                            list={product.list}
                            active={this.state.activeSubTab}
                            setActiveSubTab={this.setActiveSubTab}
                            setMobileCollapsedMenu={this.setMobileCollapsedMenu}
                            showMobileMenu={this.state.showMobileMenu}
                            mobileCollapsedMenu={this.state.mobileCollapsedMenu}
                            hasChildren
                            product
                          />
                        )
                      }
                    </PrimaryMenuWrapper>

                    <MenuLink
                      header='Insurance Checkup ™'
                      href='/insurance-checkup-and-advice/'
                    />

                    <PrimaryMenuWrapper
                      header='Magazine'
                      activeName='magazine'
                      active={this.state.activePrimaryTab}
                      onClick={this.setActivePrimaryTab}
                    >
                      {
                        magazineItems.map((category, idx) =>
                          <SubMenu
                            key={`${category.activeName}-${idx}`}
                            menu={category.menu}
                            intro={category.intro}
                            active={this.state.activeSubTab}
                            setActiveSubTab={this.setActiveSubTab}
                            setMobileCollapsedMenu={this.setMobileCollapsedMenu}
                            showMobileMenu={this.state.showMobileMenu}
                            mobileCollapsedMenu={this.state.mobileCollapsedMenu}
                            hasChildren
                            magazine
                          />
                        )
                      }
                    </PrimaryMenuWrapper>

                    <PrimaryMenuWrapper
                      header='About'
                      activeName='about'
                      active={this.state.activePrimaryTab}
                      onClick={this.setActivePrimaryTab}
                    >
                      {
                        aboutItems.map(item =>
                          <SubMenu
                            key={`about-${item.activeName}`}
                            menu={{
                              header: item.header,
                              link: item.link,
                              activeName: item.activeName,
                            }}
                            active={this.state.activeSubTab}
                            setActiveSubTab={this.setActiveSubTab}
                          />
                        )
                      }
                    </PrimaryMenuWrapper>
                  </ul>

                  <ul className={styles['secondary-nav']}>
                    <MenuLink
                      header='Contact'
                      href='/about/contact'
                      secondary
                    />
                    <MenuLink
                      header='Account'
                      href='/users/sign_in'
                      secondary
                    />
                    <li className={styles['mobile-scroll-buffer']}></li>
                  </ul>
                </div>
              </div>

              <Search
                searching={this.state.searching}
                toggleSearching={this.toggleSearching}
                toggleMobileMenu={this.toggleMobileMenu}
                showMobileMenu={this.state.showMobileMenu}
              />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default MainNav;
