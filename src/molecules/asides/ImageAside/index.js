import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from 'atoms/Icon';
import TextComponent from 'atoms/TextComponent'
import * as icons from 'assets/images';
import styles from './image-aside.module.scss';

function ImageAside ( props ) {
  const {
    className,
    header,
    icon,
    subheader,
    type,
    basic,
    compact,
    centered,
    simple
  } = props;

  const variant = classnames(
    { [styles.basic]: basic },
    { [styles.centered]: centered },
    { [styles.compact]: compact },
    { [styles.simple]: simple }
  );

  return (
    <div className={ classnames( variant, className ) }>

      { icons[icon] ?
          <Icon
            icon={ icon }
            className={ styles.icon } />
        :
          <div className={ styles.icon }>
            <img
              className={ styles.image }
              src={ icon } />
          </div>
      }

      <aside className={ styles.aside }>
        <TextComponent
          className={ styles.header }
        >
          { header }
        </TextComponent>

        { subheader &&
          <TextComponent
            className={ styles.subheader }
          >
            { subheader }
          </TextComponent>
        }
      </aside>
    </div>
  )
}

ImageAside.propTypes = {
  /**
   * basic variant
   */
  basic: PropTypes.bool,

  /**
   * supply any additional class names
   */
  className: PropTypes.string,

  /**
   * centered variant
   */
  centered: PropTypes.bool,

  /**
   * compact variant
   */
  compact: PropTypes.bool,

  /**
   * main header text for aside
   */
  header: PropTypes.string.isRequired,

  /**
    * This is the icon name from the [Icon component](/#icon).
    */
  icon: PropTypes.string.isRequired,

  /**
   * simple variant
   */
  simple: PropTypes.bool,

  /**
   * text displayed below the main header
   */
  subheader: PropTypes.string,
}

ImageAside.defaultProps = {
  basic: true
}

export default ImageAside;
