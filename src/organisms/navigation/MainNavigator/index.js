import React, { Component } from 'react';
import classnames from 'classnames';

import PrimaryMenuWrapper from './Menu/PrimaryMenuWrapper';
import MenuLink from './Menu/MenuLink';
import Search from './Search';
import SubMenu from './SubMenu';

import styles from './main_nav.module.scss';

import insuranceProducts from './data/products';

import aboutItems from './data/aboutItems';

class MainNav extends Component {
  constructor() {
    super();

    this.state = {
      activePrimaryTab: 'insurance',
      activeSubTab: null,
      searching: false,
      showMobileMenu: false,
      mobileCollapsedMenu: null,
    };
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
      styles['panel'],
      this.state.searching && styles['searching'],
      this.state.showMobileMenu && styles['show-mobile-menu']
    ];

    const primaryPanelClasses = [
      styles['primary-panel'],
      this.state.mobileCollapsedMenu && styles['mobile-collapsed'],
    ];

    return (
      <nav className={styles['wrapper']}>
        <div className={classnames(...panelClasses)} data-behavior='MainNav'>
          <div className={styles['container']}>
            <div className={styles['logo']}>
              <a
                data-behavior='TrackAnalyticsOnClick' data-analytics-event-data='{&quot;name&quot;:&quot;Used main nav&quot;,&quot;properties&quot;:{&quot;navigateTo&quot;:&quot;/&quot;,&quot;navigateFrom&quot;:&quot;/templates/main_nav&quot;}}'
                href='/'
              >
                <img alt='PolicyGenius' src='https://res-3.cloudinary.com/policygenius/image/upload/v1/general/pg-logo-tab.svg' />
              </a>
            </div>
            <div className={styles['panel-wrapper']}>
              <div className={classnames(...primaryPanelClasses)} data-primary-panel=''>
                <div className={styles['primary-panel-wrapper']} data-primary-panel-wrapper=''>
                  <ul className={styles['primary-nav']}>
                    <PrimaryMenuWrapper
                      header='Insurance Quotes & Guides'
                      activeName='insurance'
                      active={this.state.activePrimaryTab}
                      onClick={this.setActivePrimaryTab}
                    >
                      {
                        insuranceProducts.map((product, idx) =>
                          <SubMenu
                            key={`${product.activeName}-${idx}`}
                            headerText={product.header}
                            headerLink={product.link}
                            activeName={product.activeName}
                            intro={product.intro}
                            list={product.list}
                            active={this.state.activeSubTab}
                            setActiveSubTab={this.setActiveSubTab}
                            setMobileCollapsedMenu={this.setMobileCollapsedMenu}
                            showMobileMenu={this.state.showMobileMenu}
                            mobileCollapsedMenu={this.state.mobileCollapsedMenu}
                          />
                        )
                      }
                    </PrimaryMenuWrapper>

                    <MenuLink
                      header='Insurance Checkup ™'
                      href='/insurance-checkup-and-advice/'
                    />

                    <PrimaryMenuWrapper
                      header='About'
                      activeName='about'
                      active={this.state.activePrimaryTab}
                      onClick={this.setActivePrimaryTab}
                    >
                      {
                        aboutItems.map(item =>
                          <SubMenu
                            key={`about-${item.name}`}
                            headerText={item.header}
                            headerLink={item.link}
                            active={this.state.activeSubTab}
                            activeName={item.name}
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
