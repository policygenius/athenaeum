import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Layout from 'atoms/Layout';
import Col from 'atoms/Layout/Col';
import Icon from 'atoms/Icon';
import TextComponent from 'atoms/TextComponent';
import StepProgress from 'molecules/StepProgress';
import ContactCard from 'organisms/cards/ContactCard';
import styles from './navigator.module.scss';


function renderStepProgress(data) {
  return (
    <StepProgress
      className={styles['step-progress']}
      steps={data}
    />
  );
}

function renderContactCard() {
  // eslint-disable-next-line
  const clickExample = () => alert('Chat clicked!')

  return (
    <ContactCard
      className={styles['contact-card']}
      phoneNumber='1(800) 555-5309'
      chatText='Chat with an Expert'
      chatClick={clickExample}
    />
  );
}

function renderLogoPanel(stepProgressData, leftRailText) {
  return (

    <Col
      className={styles['logo-panel']}
    >
      <Layout
        mediumCols={[ 8, 4 ]}
        largeCols={[ 12 ]}
        style={{ justifyContent: 'space-between' }}
        fullwidth
      >
        <Col fullwidth>
          <div className={styles['logo-wrapper']}>
            <Icon
              icon='pgLogo'
              className={styles.logo}
            />
          </div>
          <div className={styles['mobile-header-wrapper']}>
            { stepProgressData && renderStepProgress(stepProgressData) }
            {
              leftRailText &&
                <TextComponent
                  type={3}
                  className={styles['logo-panel-text']}
                  light
                >
                  { leftRailText }
                </TextComponent>
            }
          </div>
        </Col>

        { renderContactCard() }

      </Layout>
    </Col>

  );
}

function isPartial(child) {
  return child.type.prototype instanceof Partial;
}

function separateParts(children) {
  const parts = {};

  parts.main = React.Children.map(children, (child) => {
    if (isPartial(child)) {
      parts[child.type.name] = child;

      return undefined;
    }

    return child;
  });

  return parts;
}

function Navigator( props ) {
  const {
    children,
    className,
    stepProgressData,
    leftRailText
  } = props;

  const parts = separateParts(children);

  return (
    <div className={classnames(styles['navigator'], className)}>
      <Layout
        largeCols={[ 3, 9 ]}
        className={styles.layout}
        fullwidth
      >

        { renderLogoPanel(stepProgressData, leftRailText) }

        <Col fullwidth>
          <Layout mediumCols={[ 7, 4 ]} fullwidth>

            <Col
              className={styles.main}
            >
              <Layout fullwidth>
                { stepProgressData && renderStepProgress(stepProgressData) }
              </Layout>
              { parts.main }
            </Col>

            <Col
              className={styles['right-rail']}
              style={{ marginLeft: 'auto' }}
            >
              <div className={styles['contact-card']}>

                { renderContactCard() }

              </div>

              { parts.Sidebar }

            </Col>
          </Layout>

          <div>
            Footer Placeholder
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
