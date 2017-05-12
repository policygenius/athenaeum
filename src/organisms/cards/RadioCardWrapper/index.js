import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from 'organisms/cards/RadioCard/radio_card.module.scss';

function RadioCardWrapper(props) {
  const {
    children,
    className,
  } = props;

  return (
    <div className={classnames(styles['radio-card-wrapper'], className)}>
      { children }
    </div>
  );
}


RadioCardWrapper.propTypes = {
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,
};

export default RadioCardWrapper;
