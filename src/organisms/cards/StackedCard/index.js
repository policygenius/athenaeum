import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './stacked_card.module.scss';

const stackChild = child => <li className={styles['stacked-li']}>{ child }</li>;
const stackChildren = children => React.Children.map(children, stackChild);

function StackedCard(props) {
  const {
    children,
    className
  } = props;

  return (
    <ul className={classnames(styles['stacked'], className)}>
      { stackChildren(children) }
    </ul>
  );
}

StackedCard.propTypes = {
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,
};

export default StackedCard;
