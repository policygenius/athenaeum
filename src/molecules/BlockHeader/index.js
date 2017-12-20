import React from 'react';
import PropTypes from 'prop-types';

import GrayBox from 'atoms/GrayBox';

const BlockHeader = ({
  supertitle,
  title,
  cols,
  variant,
  colorDash,
  leftOffset,
  verticalPadding
}) =>
  <GrayBox
    cols={cols}
    variant={variant}
    colorDash={colorDash}
    leftOffset={leftOffset}
    verticalPadding={verticalPadding}
  >
    <Text variant='label'>
      {supertitle}
    </Text>
    <Text font='a' size={2}>
      {title}
    </Text>
  </GrayBox>;

BlockHeader.propTypes = {
  /**
   * The small title above the main title
  */
  supertitle: PropTypes.string,
  /**
   * The main title
  */
  title: PropTypes.string,
  /**
   * How many columns the grey box spans
  */
  cols: PropTypes.number,
  /**
   * `left` or `right` fixed to the side of the section
  */
  variant: PropTypes.string,
  /**
   * Color of the color dash, e.g. "primary-1" or "secondary-2"
  */
  colorDash: PropTypes.string,
  /**
   * How much padding to have between titles and gray box in pixels e.g. `"12px"`
  */
  verticalPadding: PropTypes.string,
  /**
   * Number of columns to push the title to the right, eg `3`
  */
  leftOffset: PropTypes.number
};

export default BlockHeader;
