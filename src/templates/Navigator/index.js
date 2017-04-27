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


function renderStepProgress() {
  return (
    <StepProgress
      className={styles['step-progress']}
      steps={[
        { active: false,
          inactive: false,
          icon: 'calculator',
          label: 'Aenean',
          link: '#' },
        { active: true,
          inactive: false,
          icon: 'health',
          label: 'Phasellus',
          link: '#' },
        { active: false,
          inactive: true,
          icon: 'application',
          label: 'Curabitur',
          link: '#' },
        { active: false,
          inactive: true,
          icon: 'quotes',
          label: 'Etiam',
          link: '#' }
      ]}
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

function Navigator( props ) {
  const {
    children,
    className,
    stepprogress,
    leftRailText
  } = props;

  return (
    <div className={classnames(className, styles['navigator'])}>
      <Layout
        largeCols={[ 3, 9 ]}
        className={styles.layout}
        fullwidth
      >
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
                { stepprogress && renderStepProgress() }
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
        <Col fullwidth>
          <Layout mediumCols={[ 7, 4 ]} fullwidth>
            <Col
              className={styles.main}
            >
              <Layout fullwidth>
                { stepprogress && renderStepProgress() }
              </Layout>
              { children }
            </Col>
            <Col
              className={styles['right-rail']}
              style={{ marginLeft: 'auto' }}
            >
              { renderContactCard() }
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
  stepprogress: PropTypes.bool
};

Navigator.defaultProps = {
  stepprogress: true
};

export default Navigator;
