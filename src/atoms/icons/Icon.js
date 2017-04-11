import React, { PropTypes } from 'react';
import SVGInline from 'react-svg-inline';
import * as icons from 'assets/images';

function Icon ( props ) {
  const icon = icons[props.icon];
  const { wrapperClassName, wrapperStyles } = props;

  return (
    <div
      className={ wrapperClassName }
      style={ wrapperStyles }
    >
      <SVGInline
        svg={ icon }
        width='100%' />
    </div>
  )
}

Icon.propTypes = {
  /**
   * name of icon to render;
   * see `src/assets/images/index.js` for complete list
   */
  icon: PropTypes.string.isRequired,
  /**
   * styles applied to icon wrapper
   */
  wrapperStyles: PropTypes.object,
  /**
   * class name applied to icon wrapper
   */
  wrapperClassName: PropTypes.string

}

export default Icon;
