import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Sticky from 'react-stickynode';

import { Layout, Col } from 'atoms/Layout';
import Icon from 'atoms/Icon';
import StepIndicator from 'molecules/StepIndicator';
import LinkWrapper from 'atoms/LinkWrapper';
import Text from 'atoms/Text';
import Spacer from 'atoms/Spacer';

import styles from './navigator.module.scss';

const headerLink = (item) => {
  const linkProps = {};

  if (typeof item.link === 'string') {
    linkProps.href = item.link;
  } else {
    linkProps.onClick = item.link;
  }

  return (
    <LinkWrapper
      type='resource'
      key={item.icon}
      className={styles['header-icon-lockup']}
      {...linkProps}
    >
      <Icon
        icon={item.icon}
        height='22px'
        width='22px'
        className={styles['header-icon']}
      />
      <Text
        size={10}
        font='a'
        className={styles['header-secondary-text']}
      >
        {item.text}
      </Text>
    </LinkWrapper>
  );
};

function Navigator(props) {
  const {
    children,
    className,
    footer,
    sidebar,
    mobileHeader,
    headerLinks,
    stepIndicatorProps,
    overflow,
  } = props;

  return (
    <div className={classnames(styles['navigator'], className)}>
      <div className={styles['header']}>
        <Icon
          icon='pgLogoBlack'
          height='22px'
          width='125px'
        />

        <StepIndicator
          className={classnames(styles['indicator'], styles['indicator-desktop'])}
          {...stepIndicatorProps}
        />

        <div className={styles['header-icons']}>
          {
            headerLinks.map(headerLink)
          }

          {
            overflow &&
              <div
                className={styles['header-icon-overflow']}
                onClick={overflow.onClick}
              >
                <Icon
                  icon='overflow'
                  height='22px'
                  width='22px'
                  className={styles['overflow-icon']}
                />
              </div>
          }
        </div>
      </div>

      {
        mobileHeader &&
          <Sticky
            enabled
            top={0}
            bottomBoundary='#mobile-bottom'
            innerZ={10}
          >
            <div className={styles['mobile-subheader']}>
              {mobileHeader}
            </div>
          </Sticky>
      }

      <Layout
        className={styles['layout']}
        fullwidth
      >
        <Col className={styles['main']}>

          <div className={classnames(styles['indicator'], styles['indicator-tablet'])}>
            <Spacer size={24} />
            <StepIndicator {...stepIndicatorProps} />
          </div>

          <Layout
            className={styles['main-layout']}
            mediumCols={[ 7, 4 ]}
          >
            <Col className={styles['main-col']} fullwidth>
              <div id='sticky-top'>
              </div>
              <div id='sticky-bottom'>
                { children }
              </div>
            </Col>

            <Col
              className={styles['right-rail']}
              style={{ marginLeft: 'auto' }}
            >
              <Sticky
                enabled
                top='#sticky-top'
                bottomBoundary='#sticky-bottom'
              >
                <div className={styles['sidebar']}>{sidebar}</div>
              </Sticky>
            </Col>

          </Layout>
          <div className={styles['footer-container']} id='mobile-bottom'>
            <div className={styles['footer-wrapper']}>{footer}</div>
          </div>
        </Col>
      </Layout>
    </div>
  );
}

Navigator.propTypes = {
  /**
   * This prop will be add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,

  /**
   * Props for StepIndicator component
   */
  stepIndicatorProps: PropTypes.shape({
    steps: StepIndicator.propTypes.steps,
    navigateToPath: StepIndicator.propTypes.navigateToPath,
  }),

  /**
   * Component to be used as the MobileHeader
   */
  mobileHeader: PropTypes.node,

  /**
   * Component to be used as the right sticky sidebar
   */
  sidebar: PropTypes.node,

  /**
   * Component to be used as the footer
   */
  footer: PropTypes.node,

  /**
   * List of links with icons to be displayed in Navigator header
   */
  headerLinks: PropTypes.array,

  /**
   * Displays overflow icon on mobile
   */
  overflow: PropTypes.shape({
    onClick: PropTypes.func,
  }),
};

export default Navigator;
