import React, { PropTypes } from 'react';
import styles from './navigator.module.scss';
import classnames from 'classnames';

function Navigator ( props ) {
  const {
    children,
    className,
    stepprogress,
    leftRailText
  } = props;

  return (
    <div className={ classnames(className, styles['navigator']) }>
      <div className={ styles['left-rail'] }>
        <Icon
          icon='pgLogo'
          className={ styles.logo }
        />
        {
          leftRailText &&
          <TextComponent
            type={ 3 }
            className={ styles['left-rail-text'] }
            light
          >
            { leftRailText }
          </TextComponent>
        }
      </div>
      <div className={ styles.main }>
        {
          stepprogress &&
          <StepProgress
            className={ styles['step-progress'] }
            data={[
              { active: false, inactive: false, icon: 'icon-calculator', label: 'Aenean', link: '#' },
              { active: true, inactive: false, icon: 'icon-health', label: 'Phasellus', link: '#' },
              { active: false, inactive: true, icon: 'icon-application', label: 'Curabitur', link: '#' },
              { active: false, inactive: true, icon: 'icon-quotes', label: 'Etiam', link: '#' }
            ]}
          />
        }
        { children }
      </div>
      <div className={ styles['right-rail'] } />
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
}

Navigator.defaultProps = {
  stepprogress: true
}

export default Navigator;
