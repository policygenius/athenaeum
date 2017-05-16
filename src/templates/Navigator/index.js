import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Layout, Col } from 'atoms/Layout';
import StepProgress from 'molecules/StepProgress';
import { Partial, separatePartials, partialRenderer } from 'helpers/Partial';
import NavigatorPartials from './NavigatorPartials';

import styles from './navigator.module.scss';

function Navigator(props) {
  const {
    children,
    className,
    stepProgressData,
    leftRailText,
  } = props;

  const parts = separatePartials(children);
  const renderPartial = partialRenderer(NavigatorPartials);

  return (
    <div className={classnames(styles['navigator'], className)}>
      <Layout
        className={styles.layout}
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
                { renderPartial('icon', {}) }
              </div>

              <div className={styles['mobile-header-wrapper']}>
                { renderPartial('stepProgress', stepProgressData) }
                { renderPartial('railText', leftRailText) }
              </div>
            </Col>

            { renderPartial('contactCard', { inverted: true }) }
          </Layout>
        </Col>

        <Col
          className={styles.main}
        >
          <Layout
            mediumCols={[ 7, 4 ]}
            className={styles['main-layout']}
          >

            <Col className={styles['main-col']} fullwidth>
              <Layout fullwidth>
                { renderPartial('stepProgress', stepProgressData) }
              </Layout>

              { renderPartial('default', parts.Main) }
            </Col>

            <Col
              className={styles['right-rail']}
              style={{ marginLeft: 'auto' }}
            >
              <div className={styles['contact-card']}>
                { renderPartial('contactCard', {}) }
              </div>

              { renderPartial('sidebar', parts.Sidebar) }
            </Col>
          </Layout>
          <div className={styles['footer-container']}>
            <div className={styles['footer-wrapper']}>
              { renderPartial('default', parts.Footer) }
            </div>
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
  stepProgressData: StepProgress.propTypes.steps
};

Navigator.Sidebar = class Sidebar extends Partial {};
Navigator.Footer = class Footer extends Partial {};

export default Navigator;
