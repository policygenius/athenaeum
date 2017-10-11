import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import omit from 'lodash/omit';
import reduce from 'lodash/reduce';

import { breakpoints } from './breakpoints';

function formatMedia({ breakpoint }) {
  return reduce(breakpoint, (res, style, bp) => {
    let media = res;

    if (breakpoints[bp]) {
      media += `@media ${breakpoints[bp]} { ${style} }`;
    }

    return media;
  }, '');
}

function Wrapper(props) {
  return (
    <div
      {...omit(props, 'breakpoint', 'styles')}
    >
      { props.children }
    </div>
  );
}

const styledWrapper = styled(Wrapper).attrs({
  media: props => formatMedia(props),
  styles: props => props.styles
})`
  ${props => props.styles}
  ${props => props.media}
`;

Wrapper.propTypes = {
  /**
   * Screen size breakpoint passed to styled Wrapper. Follows PG conventions
   */
  breakpoint: PropTypes.shape({
    smallUp: PropTypes.string,
    smallOnly: PropTypes.string,
    mediumUp: PropTypes.string,
    mediumOnly: PropTypes.string,
    largeUp: PropTypes.string,
    largeOnly: PropTypes.string,
    xLargeUp: PropTypes.string,
    xLargeOnly: PropTypes.string,
    xxLargeUp: PropTypes.string,
    xxLargeOnly: PropTypes.string,
  }),

  /**
   * Additional styles to pass to styled Wrapper
   */
  styles: PropTypes.string,
};

export default styledWrapper;
