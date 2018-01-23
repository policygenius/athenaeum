import React from 'react';
import PropTypes from 'prop-types';

import Text from 'atoms/Text';
import GrayBox from './GrayBox/GrayBox';
import styles from './block-header.module.scss';

const BlockHeader = ({
  supertitle,
  title,
  description,
  cols,
  variant,
  colorDash,
  colorDashPosition,
  className,
  children,
  leftOffset,
  verticalPadding
}) =>
  (<GrayBox
    cols={cols}
    variant={variant}
    className={className}
    colorDash={colorDash}
    leftOffset={leftOffset}
    verticalPadding={verticalPadding}
    colorDashPosition={colorDashPosition}
  >
    <div>
      <Text variant='label' className={styles.label}>
        {supertitle}
      </Text>
      <Text tag='h2' className={styles.title} font='a' size={2}>
        {title}
      </Text>
      <Text className={styles.description} font='b' size={9}>
        {description}
      </Text>
      { children }
    </div>
  </GrayBox>);

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
  className: PropTypes.string,
  /**
   * The class name to be applied to gray box
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
  colorDashPosition: PropTypes.string,
  /**
   * One of "left" or "right". Determines what side of the box the color dash lives on.
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
