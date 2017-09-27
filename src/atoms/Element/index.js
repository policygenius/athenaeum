import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/* eslint-disable import/first */
import styles from './element.module.scss';
import colors from 'atoms/Color/colors.scss';
import spacing from 'atoms/Spacer/spacer.scss';

const Element = (props) => {
  const {
    tag,
    typography,
    weight,
    spacer,
    color,
    className,
    ...rest
  } = props;

  const Component = tag || 'div';
  const classes = classnames(
    styles['element'],
    !typography && tag && styles[tag],
    weight && styles[weight],
    color && colors[color],
    typography && styles[`typ-${typography}`],
    spacer && spacing[`bot-${spacer}`],
    className,
  );

  return <Component className={classes} {...rest} />;
};

Element.propTypes = {
  /**
   * Tag name
   */
  tag: PropTypes.string,
  /**
   * Custom className
   */
  className: PropTypes.string,
  /**
   * Typography weight
   */
  weight: PropTypes.oneOf([
    'light',
    'semibold',
    'bold',
    'regular',
    'fineprint',
  ]),
  /**
   * Typography settings
   * 0: 68px,
   * 1: 42px,
   * 2: 32px,
   * 3: 26px,
   * 4: 22px,
   * 5: 19px,
   * 6: 16px,
   * 7: 13px
   */
  typography: PropTypes.oneOf([ 0, 1, 2, 3, 4, 5, 6, 7 ]),
  /**
   * Controls spacing below this element. Default is at 0. Increases by ru(.25) until spacer={10}.
   * spacer={11} yields ru(3). /n
   * spacer={12} yeilds ru(6).
   */
  spacer: PropTypes.oneOf([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]),
  color: PropTypes.oneOf([
    'neutral-1',
    'neutral-2',
    'neutral-3',
    'neutral-4',
    'neutral-5',
    'neutral-6',
    'brand-1',
    'brand-2',
    'brand-3',
    'brand-4',
    'brand-5',
    'brand-6',
    'accent-1',
    'accent-2',
    'accent-3',
    'accent-4',
    'accent-5',
    'accent-6',
    'action-1',
    'action-2',
    'action-3',
    'action-4',
    'action-5',
    'action-6',
  ]),
};

export default Element;
