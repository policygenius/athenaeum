import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Layout from 'atoms/Layout';
import Col from 'atoms/Layout/Col';
import Spacer from 'atoms/Spacer';

import { generate } from 'shortid';

import styles from './product_display.module.scss';
import ProductIntro from '../Intro/Product';
import LinkList from '../LinkList';
import ArticleImage from '../ArticleImage';
import MobileBack from '../MobileBack';


class ProductDisplay extends Component {
  get displayList() {
    const { list, isActive, activeName, mobileCollapsedMenu } = this.props;

    switch (list.type) {
        case 'links':
          return (
          list.items.map((item, idx) =>
            <Col
              className={styles['display-list']}
              fullwidth={mobileCollapsedMenu}
              key={idx}
            >
              <LinkList
                item={item}
                key={generate()}
              />
            </Col>
          )
          );
        case 'articles':
          return (
          list.items.map((item, idx) => {
            const imgProps = {
              'data-src': item.imageSrc,
            };

            if (isActive || mobileCollapsedMenu === activeName) {
              imgProps.src = item.imageSrc;
            }

            return (
              <Col
                fullwidth={mobileCollapsedMenu}
                key={idx}
              >
                <ArticleImage
                  header={item.header}
                  imgProps={imgProps}
                  link={item.link}
                />
              </Col>
            );
          })
          );
        default:
          return null;
    }
  }

  render() {
    const {
      intro,
      headerText,
      isActive,
      activeName,
      mobileCollapsedMenu,
      setMobileCollapsedMenu,
    } = this.props;

    const displayClasses = [
      styles['submenu-display'],
      isActive && styles['submenu-display-active'],
      mobileCollapsedMenu === activeName && styles['mobile-collapsed'],
    ];

    const specialMediumCols = [ 'disability-insurance', 'more' ];

    const listColumns = {
      smallCols: [ 12 ],
      mediumCols: specialMediumCols.includes(activeName) ? [ 7, 5 ] : [ 4 ],
      largeCols: [ 4 ],
    };


    return (
      <div
        className={classnames(...displayClasses)}
      >
        <div className={styles['submenu-display-wrapper']}>
          <MobileBack
            setMobileCollapsedMenu={setMobileCollapsedMenu}
            text='Insurance Quotes & Guides'
          />

          <Spacer size={36} />

          <Layout
            fullwidth
            smallCols={[ 12 ]}
            largeCols={[ 4, 8 ]}
            className={styles.content}
          >
            <Col
              className={styles.intro}
            >
              <ProductIntro
                intro={intro}
                headerText={headerText}
              />
            </Col>

            <Col
              fullwidth
            >
              <Layout
                fullwidth
                {...listColumns}
              >
                { this.displayList }
              </Layout>
            </Col>
          </Layout>
          <Spacer size={36} />
          <Spacer size={12} />
        </div>
      </div>
    );
  }
}

ProductDisplay.propTypes = {
  intro: PropTypes.object,
  headerText: PropTypes.string,
  list: PropTypes.array,
  isActive: PropTypes.bool,
  activeName: PropTypes.string,
  mobileCollapsedMenu: PropTypes.string,
  setMobileCollapsedMenu: PropTypes.func,
};

export default ProductDisplay;
