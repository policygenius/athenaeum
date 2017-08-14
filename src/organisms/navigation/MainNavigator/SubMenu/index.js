import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Col from 'atoms/Layout/Col';
import Icon from 'atoms/Icon';
import Layout from 'atoms/Layout';
import LinkWrapper from 'atoms/LinkWrapper';

import Intro from './Intro';
import SubMenuList from './SubMenuList';
import BlogArticleList from './BlogArticleList';
import styles from './main_nav_submenu.module.scss';

function SubMenu(props) {
  const {
    headerText,
    headerLink,
    active,
    activeName,
    intro,
    list,
    setActiveSubTab,
    showMobileMenu,
    setMobileCollapsedMenu,
    mobileCollapsedMenu,
  } = props;

  const hasChildren = intro && list;

  const classes = [
    styles['item'],
    hasChildren && styles['has-content'],
    active === activeName && styles['active'],
    mobileCollapsedMenu === activeName && styles['mobile-collapsed'],
  ];

  return (
    <li
      className={classnames(...classes)}
      onMouseEnter={() => setActiveSubTab(activeName)}
      onMouseLeave={() => setActiveSubTab(null)}
    >
      <LinkWrapper
        className={styles['header']}
        data-behavior='TrackAnalyticsOnClick'
        data-analytics-event-data={`{&quot;name&quot;:&quot;Used main nav&quot;,&quot;properties&quot;:{&quot;navigateTo&quot;:&quot;${headerLink}&quot;,&quot;navigateFrom&quot;:&quot;/templates/main_nav&quot;,&quot;clickedFrom&quot;:&quot;secondary nav&quot;}}`}
        href={showMobileMenu ? null : headerLink}
        onClick={
          showMobileMenu ? () => setMobileCollapsedMenu(activeName) : () => true
        }
        variant='no-text-decoration'
        color='neutral-2'
      >
        <Layout
          fullwidth
          smallCols={[ 10, 2 ]}
          largeCols={[ 12, 0 ]}
        >
          { headerText }
          <Col
            className={styles['mobile-chevron-right']}
          >
            <Icon
              icon='chevronRight'
              className={styles['mobile-chevron-icon']}
            />
          </Col>
        </Layout>
      </LinkWrapper>

      { hasChildren &&
      <div className={styles['wrapper']}>
        <ul className={styles['panel']}>
          <li
            className={styles['mobile-back-wrapper']}
            onClick={() => setMobileCollapsedMenu(null)}
          >
            <div className={styles['mobile-back-header']}>
              <Icon
                icon='chevronLeft'
                className={styles['mobile-chevron-icon']}
              />
              <span className={styles['mobile-back-text']}>{ headerText }</span>
            </div>
          </li>

          <Intro
            cta={intro.cta}
            product={activeName}
            imgSrc={intro.imgSrc}
            linkHref={intro.linkHref}
          />
          {
                list.type === 'links' ?
                  list.items.map((l, idx) =>
                    <SubMenuList
                      key={`life-submenu-list-${idx}`}
                      header={l.header}
                      listItems={l.items}
                    />
                  )
                  :
                  <BlogArticleList
                    data={list.items}
                    alt={list.alt}
                  />
              }

          <li className={styles['mobile-scroll-buffer']}></li>
        </ul>
      </div>
      }
    </li>
  );
}

SubMenu.propTypes = {
  headerText: PropTypes.string,
  headerLink: PropTypes.string,
  active: PropTypes.string,
  activeName: PropTypes.string,
  setActiveSubTab: PropTypes.func,
  intro: PropTypes.object,
  list: PropTypes.object,
  showMobileMenu: PropTypes.bool,
  setMobileCollapsedMenu: PropTypes.func,
  mobileCollapsedMenu: PropTypes.string,
};

export default SubMenu;
