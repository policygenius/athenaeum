import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Text from 'atoms/Text';
import classnames from 'classnames';
import styles from './step_indicator.module.scss';

export default class ProgressBarStep extends Component {
  titleProps() {
    const {
      step: { currentStepActive }
    } = this.props;

    return {
      color: currentStepActive ? 'primary-1' : 'neutral-3',
      bold: true
    };
  }

  subtitleProps() {
    const {
      step: { currentStepActive }
    } = this.props;

    return {
      color: currentStepActive ? 'primary-1' : 'neutral-3',
      bold: currentStepActive
    };
  }

  circleClasses() {
    const {
      step
    } = this.props;

    return [
      styles['circle'],
      step.currentStepActive && styles['circle-active'],
      step.clickable && !step.currentStepActive && styles['circle-completed'],
    ];
  }

  circleWrapperClasses() {
    const {
      step
    } = this.props;

    return [
      styles['circle-wrapper'],
      step.nextStepAccessible && styles['circle-wrapper-accessible'],
    ];
  }

  textClasses() {
    const {
      staticBar,
      step
    } = this.props;

    return [
      styles['step-wrapper'],
      !staticBar && step.clickable && styles['step-wrapper-clickable'],
      !step.currentStepActive && styles['step-wrapper-inactive']
    ];
  }

  clickProps() {
    const {
      staticBar,
      navigateToPath,
      step,
    } = this.props;

    return !staticBar ? {
      onClick: () => {
        if (step.clickable) {
          navigateToPath(step.route);
        }
      }
    } : null;
  }

  render() {
    const { step } = this.props;

    return (
      <div className={styles['breadcrumb']} {...this.clickProps()}>
        <div className={classnames(this.textClasses())}>
          <Text tag='span' size={11} font='a' spaced className={styles['step-title']} {...this.titleProps()}>{ step.text }</Text>
        </div>
        <div className={classnames(...this.circleWrapperClasses())}>
          <div className={classnames(...this.circleClasses())} />
        </div>
        {
          step.subtitle && (
            <div className={styles['step-subtitle']}>
              <Text tag='span' size={9} font='b' {...this.subtitleProps()}>{step.subtitle}</Text>
            </div>
          )
        }
      </div>
    );
  }
}

ProgressBarStep.propTypes = {
  staticBar: PropTypes.bool,
  navigateToPath: PropTypes.func,
  step: PropTypes.object,
};
