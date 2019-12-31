import React from 'react';
import PropTypes from 'prop-types';

import { dataAttributes } from './utils';

function wrappedChild(children, data) {
  const child = React.Children.only(children);

  if (child.type === Trackable) return child;

  return React.cloneElement(child, data);
}

function Trackable(props) {
  const { children, data } = props;

  return wrappedChild(children, dataAttributes(data));
}

Trackable.propTypes = {

  /**
   * Will spread and render dataObj onto Component.
   */
  data: PropTypes.object.isRequired,
};

export default Trackable;
