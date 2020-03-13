/* eslint-disable react/require-render-return */
import React from 'react';
import PropTypes from 'prop-types';

class BaseFieldGroup extends React.Component {
  wrapperReference = null;

  clickIsLeaving = true;

  static propTypes = {
    input: PropTypes.object,
    meta: PropTypes.object,
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, false);
  }

  handleClickOutside = (e) => {
    const { input } = this.props;

    if (!this.wrapperReference) { return; }
    if (!this.wrapperReference.contains(e.target)) {
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
