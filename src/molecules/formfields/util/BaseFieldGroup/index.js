/* eslint-disable react/require-render-return */
import React from 'react';
import PropTypes from 'prop-types';

class BaseFieldGroup extends React.Component {
  static propTypes = {
    input: PropTypes.object,
    meta: PropTypes.object,
  }

  componentWillMount() {
    document.addEventListener('click', this.handleClickOutside, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, false);
  }

  wrapperReference = null;

  clickIsLeaving = true;

  handleClickOutside = (e) => {
    const { input, meta: { touched } } = this.props;

    if (!this.wrapperReference) { return; }
    if (touched && !this.wrapperReference.contains(e.target)) {
      input.onBlur();
    }
  }

  handleMouseDown = (e) => {
    if (this.wrapperReference.contains(e.currentTarget)) {
      this.clickIsLeaving = false;
    }
  }

  handleMouseUp = () => {
    this.clickIsLeaving = true;
  }

  handleBlur = () => {
    const { input } = this.props;

    if (this.clickIsLeaving) {
      input.onBlur();
    }
  }

  render() {
    throw Error('Child element should have its own call to .render');
  }
}

export default BaseFieldGroup;
