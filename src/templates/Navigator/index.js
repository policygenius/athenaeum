import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from 'atoms/Icon';
import TextComponent from 'atoms/TextComponent';
import StepProgress from 'molecules/StepProgress';
import ContactCard from 'organisms/cards/ContactCard';
import styles from './navigator.module.scss';

function Navigator( props ) {
  const {
    children,
    className,
    stepprogress,
    leftRailText
  } = props;

  return (
    <div className={classnames(className, styles['navigator'])}>
      <div className={styles['left-rail']}>
        <Icon
          icon='pgLogo'
          className={styles.logo}
        />
        {
          leftRailText &&
          <TextComponent
            type={3}
            className={styles['left-rail-text']}
            light
          >
            { leftRailText }
          </TextComponent>
        }
      </div>
      <div className={styles.main}>
        {
          stepprogress &&
          <StepProgress
            className={styles['step-progress']}
            data={[
              { active: false,
                inactive: false,
                icon: 'icon-calculator',
                label: 'Aenean',
                link: '#' },
              { active: true,
                inactive: false,
                icon: 'icon-health',
                label: 'Phasellus',
                link: '#' },
              { active: false,
                inactive: true,
                icon: 'icon-application',
                label: 'Curabitur',
                link: '#' },
              { active: false,
                inactive: true,
                icon: 'icon-quotes',
                label: 'Etiam',
                link: '#' }
            ]}
          />
        }
        { children }
      </div>
      <div className={styles['right-rail']}>
        <ContactCard
          phoneNumber='1(800) 555-5309'
          chatText='Chat with an Expert'
          chatClick={() => alert('Chat clicked!')}
        />
      </div>
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
