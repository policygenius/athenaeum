import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SVGInline from 'react-svg-inline';
import { interactiveMap as map } from 'assets/images';

import styles from './interactive_map.module.scss';

function InteractiveMap(props) {
  const {
    className,
  } = props;

  const classes = [
    styles['interactive-map'],
    className,
  ];

  return (
    <div className={classnames(...classes)}>
      <SVGInline svg={ map } />
    </div>
  );
}


InteractiveMap.propTypes = {
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,
};

InteractiveMap.defaultProps = {
  // Place any default props here.
};

export default InteractiveMap;
