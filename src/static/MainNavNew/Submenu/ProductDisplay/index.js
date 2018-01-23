import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Layout from 'atoms/Layout';
import Col from 'atoms/Layout/Col';
import Spacer from 'atoms/Spacer';

import styles from './product_display.module.scss';
import ProductIntro from '../Intro/Product';
import LinkList from '../LinkList';
import ArticleImage from '../ArticleImage';
import MobileBack from '../MobileBack';


class ProductDisplay extends Component {
  constructor() {
    super();

    this.state = {
      loadImg: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    const {
      isActive,
      mobileCollapsedMenu,
      activeName,
    } = nextProps;

    const loadImg = isActive || mobileCollapsedMenu === activeName;

    if (loadImg && !this.state.loadImg) {
      this.setState({ loadImg: true });
    }
  }

  get displayList() {
    const { list, mobileCollapsedMenu } = this.props;

    switch (list.type) {
        case 'links':
          return (
          list.items.map(item =>
            (<Col
              className={styles['display-list']}
              fullwidth={mobileCollapsedMenu}
              key={item.header}
            >
              <LinkList
                item={item}
              />
            </Col>)
          )
          );
        case 'articles':
          return (
            list.items.map((item) => {
              const imgProps = {
                'data-src': item.imageSrc,
              };

              if (this.state.loadImg) {
                imgProps.src = item.imageSrc;
              }

              return (
                <Col
                  fullwidth={mobileCollapsedMenu}
                  key={item.link}
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
      columns,
      mobileCollapsedMenu,
      setMobileCollapsedMenu,
    } = this.props;

    const displayClasses = classnames(
      styles['submenu-display'],
      isActive && styles['submenu-display-active'],
      mobileCollapsedMenu === activeName && styles['mobile-collapsed'],
    );

    const listColumns = {
      smallCols: [ 12 ],
      mediumCols: columns === 2 ? [ 7, 5 ] : [ 4 ],
      largeCols: [ 4 ],
    };


    return (
      <div
        className={displayClasses}
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
  list: PropTypes.object,
  isActive: PropTypes.bool,
  activeName: PropTypes.string,
  mobileCollapsedMenu: PropTypes.string,
  setMobileCollapsedMenu: PropTypes.func,
  columns: PropTypes.number,
};

export default ProductDisplay;
