import React from 'react';
import PropTypes from 'prop-types';
import styled, { css as styledComponentsCss } from 'styled-components';
import breakpoints from './constants/breakpoints';
import colors from './constants/colors';
import spacing from './constants/spacing';

const variables = { breakpoints, colors, spacing };

function StyledWrapper({ children, css, component, ...props }) {
  return React.createElement(
    css
    ? styled(component)(styledComponentsCss([
      css(variables)
    ]))
    : component,
    props,
    children
  );
}

StyledWrapper.propTypes = {
  /**
   * Pass in a function that takes a single prop (variables)
   * and returns a template literal.
   */
  css: PropTypes.func,
  /**
   * Any component. Will also take an HTML5 tag name as a string.
   */
  component: PropTypes.node
};

StyledWrapper.defaultProps = {
  component: 'div'
};

export default StyledWrapper;
