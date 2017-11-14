import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Text from 'atoms/Text';
import classnames from 'classnames';
import styles from './step_indicator.module.scss';

export default class ProgressBarStep extends Component {
  textProps() {
    const {
      step
    } = this.props;

    if (step.currentStepActive) {
      return {
        color: 'neutral-2',
        weight: 'semibold',
      };
    }

    return {
      color: 'neutral-5',
      weight: 'semibold'
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
      step
    } = this.props;

    return [
      styles['step-wrapper'],
      step.clickable && styles['step-wrapper-clickable'],
      !step.currentStepActive && styles['step-wrapper-inactive']
    ];
  }

  handleClick = () => {
    const {
      step,
      navigateToPath
    } = this.props;

    if (step.clickable) {
      navigateToPath(step.route);
    }
  }

  render() {
    const { step } = this.props;

    return (
      <div className={styles['breadcrumb']} onClick={this.handleClick}>
        <div className={classnames(this.textClasses())}>
          <Text tag='span' type={7} className={styles['step-title']} {...this.textProps()}>{ step.text }</Text>
        </div>
        <div className={classnames(...this.circleWrapperClasses())}>
          <div className={classnames(...this.circleClasses())} />
        </div>
      </div>
    );
  }
}

ProgressBarStep.propTypes = {
  step: PropTypes.object,
  navigateToPath: PropTypes.func,
};
