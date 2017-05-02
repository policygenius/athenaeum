import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Layout from 'atoms/Layout';
import Col from 'atoms/Layout/Col';
import StepProgress from 'molecules/StepProgress';
import NavigatorPartials from './NavigatorPartials';

import styles from './navigator.module.scss';

function isNamedPartial(child) {
  return child.type.prototype instanceof Partial;
}

function separateParts(children) {
  const parts = {
    Main: [],
  };

  if (!children) return parts;

  React.Children.map(children, (child) => {
    if (isNamedPartial(child)) {
      parts[child.type.name] = child;
    } else {
      parts.Main.push(child);
    }
  });

  return parts;
}

function renderPartial(part, data) {
  if (!NavigatorPartials[part]) return <div>{part}</div>;

  return NavigatorPartials[part](data);
}

function Navigator(props) {
  const {
    children,
    className,
    stepProgressData,
    leftRailText,
  } = props;

  const parts = separateParts(children);

  return (
    <div className={classnames(styles['navigator'], className)}>
      <Layout
        className={styles.layout}
        largeCols={[ 3, 9 ]}
        fullwidth
      >

        <Col className={styles['logo-panel']}>
          <Layout
            mediumCols={[ 8, 4 ]}
            largeCols={[ 12 ]}
            style={{ justifyContent: 'space-between' }}
            fullwidth
          >
            <Col fullwidth>
              <div className={styles['logo-wrapper']}>
                { renderPartial('icon')}
              </div>

              <div className={styles['mobile-header-wrapper']}>
                { renderPartial('stepProgress', stepProgressData) }
                { renderPartial('railText', leftRailText) }
              </div>
            </Col>

            { renderPartial('contactCard') }
          </Layout>
        </Col>

        <Col fullwidth>
          <Layout mediumCols={[ 7, 4 ]} fullwidth>

            <Col className={styles.main}>
              <Layout fullwidth>
                { renderPartial('stepProgress', stepProgressData) }
              </Layout>

              { renderPartial('main', parts.Main) }
            </Col>

            <Col
              className={styles['right-rail']}
              style={{ marginLeft: 'auto' }}
            >
              <div className={styles['contact-card']}>
                { renderPartial('contactCard') }
              </div>

              { renderPartial('sidebar', parts.Sidebar) }
            </Col>
          </Layout>

          <div>Footer Placeholder</div>

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
  stepProgressData: StepProgress.propTypes.data
};

// eslint-disable-next-line
class Partial extends React.PureComponent {
  render() {
    return <div>{this.props.children}</div>;
  }
}

Navigator.Sidebar = class Sidebar extends Partial {};

export default Navigator;
