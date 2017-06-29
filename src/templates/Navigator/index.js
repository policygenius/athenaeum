import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Sticky from 'react-stickynode';

import { Layout, Col } from 'atoms/Layout';
import Icon from 'atoms/Icon';
import ContactCard from 'organisms/cards/ContactCard';
import StepProgress from 'molecules/StepProgress';
import Text from 'atoms/Text';

import styles from './navigator.module.scss';

function renderContactCard(contactProps, inverted) {
  const newProps = Object.assign({}, contactProps, { inverted });

  return <ContactCard {...newProps} />;
}

function Navigator(props) {
  const {
    children,
    className,
    stepProgressData,
    leftRailText,
    contactProps,
    footer,
    sidebar,
    mobileHeader,
    onMenuClick,
  } = props;

  return (
    <div className={classnames(styles['navigator'], className)}>
      <Layout
        className={styles['layout']}
        fullwidth
      >
        <Col className={styles['logo-panel']}>
          <Layout
            mediumCols={[ 8, 4 ]}
            largeCols={[ 12 ]}
            className={styles['logo-panel-layout']}
          >
            <Col
              className={styles['logo-panel-col']}
            >
              <div className={styles['logo-wrapper']}>
                <Sticky
                  enabled
                  top={36}
                  bottomBoundary='#sticky-bottom'
                  activeClass={styles['sticky']}
                >
                  <Icon icon='pgLogo' className={styles['logo']} />
                </Sticky>

                <Icon
                  icon='hamburger'
                  className={styles['icon-hamburger']}
                  height='24px'
                  width='24px'
                  onClick={onMenuClick}
                />
              </div>

              <div className={styles['mobile-header-wrapper']}>
                <div className={styles['mobile-nav']}>
                  <StepProgress
                    className={styles['step-progress']}
                    steps={stepProgressData}
                  />

                  <Sticky
                    enabled
                    top={174}
                    bottomBoundary='#sticky-bottom'
                    activeClass={styles['sticky']}
                  >
                    <Text className={styles['logo-panel-text']} type={3} light>
                      { leftRailText }
                    </Text>
                  </Sticky>
                </div>
                <div className={styles['mobile-header']}>
                  <Sticky
                    enabled
                    bottomBoundary='#mobile-bottom'
                  >
                    { mobileHeader }
                  </Sticky>
                </div>
              </div>
            </Col>
            <div className={styles['contact-card']}>
              { renderContactCard(contactProps, true) }
            </div>
          </Layout>
        </Col>

        <Col className={styles['main']}>
          <Layout
            className={styles['main-layout']}
            mediumCols={[ 7, 4 ]}
          >
            <Col className={styles['main-col']} fullwidth>
              <div id='sticky-top'>
                <Layout fullwidth>
                  <StepProgress
                    className={styles['step-progress']}
                    steps={stepProgressData}
                  />
                </Layout>
              </div>
              <div id='sticky-bottom'>
                { children }
              </div>
            </Col>

            <Col
              className={styles['right-rail']}
              style={{ marginLeft: 'auto' }}
            >
              <div className={styles['contact-card']}>
                { renderContactCard(contactProps) }
              </div>

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
   * Text to show up on left rail
   */
  leftRailText: PropTypes.string,
  stepProgressData: StepProgress.propTypes.steps,
  contactProps: PropTypes.shape({
    top: PropTypes.object,
    bottom: PropTypes.object,
  }),
  mobileHeader: PropTypes.node,
  sidebar: PropTypes.node,
  footer: PropTypes.node,
  /**
   * Click handler for mobile menu hambuger
   */
  onMenuClick: PropTypes.func,
};

export default Navigator;
