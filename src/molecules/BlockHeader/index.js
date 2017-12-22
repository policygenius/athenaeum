import React from 'react';
import PropTypes from 'prop-types';

import Text from 'atoms/Text';
import GrayBox from 'atoms/GrayBox';
import styles from './block-header.module.scss';

const BlockHeader = ({
  supertitle,
  title,
  description,
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
    <Text variant='label' className={styles.label}>
      {supertitle}
    </Text>
    <Text font='a' size={2}>
      {title}
    </Text>
    <Text className={styles.description} font='b' size={9}>
      {description}
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
   * The description under the title
   */
  description: PropTypes.string,
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
