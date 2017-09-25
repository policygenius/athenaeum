import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './feature_square.module.scss';
import colors from 'atoms/Color/colors.scss';

import Icon from 'atoms/Icon';
import Text from 'atoms/Text';
import Button from 'atoms/Button';

function FeatureSquare(props) {
  const {
    children,
    className,
    backgroundColor,
    header,
    subheader,
    icon,
    buttonText
  } = props;

  const classes = [
    styles['feature-square'],
    className,
    backgroundColor && colors['neutral-8'],
    colors[`background-${backgroundColor}`],
  ];

  return (
    <div className={classnames(...classes)}>
      <Icon icon={icon} className={ styles['icon'] }/>
      <Text type={4} semibold>{ header }</Text>
      <Text type={6} className={ styles['subheader'] }>{ subheader }</Text>
      <Button>{ buttonText }</Button>
    </div>
  );
}


FeatureSquare.propTypes = {
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,
};

FeatureSquare.defaultProps = {
  // Place any default props here.
  buttonText: 'Get Quotes'
};

export default FeatureSquare;
