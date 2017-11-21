import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from 'atoms/Icon';
import Text from 'atoms/Text';
import * as icons from 'assets/images';
import styles from './image-aside.module.scss';

function ImageAside( props ) {
  const {
    className,
    header,
    image,
    subheader,
    basic,
    compact,
    centered,
    dataSrc,
    maxWidth,
    icon,
    simple,
    small,
    bold
  } = props;

  const classes = [
    basic && styles['basic'],
    centered && styles['centered'],
    compact && styles['compact'],
    simple && styles['simple'],
    small && styles['small'],
    bold && styles['bold'],
    className,
  ];

  const renderIconImage = () => {
    if (!icon && !dataSrc) return null;
    if (icon && icons[icon]) return <Icon icon={icon} className={styles['icon']} />;

    return (
      <div className={styles['image-wrapper']} style={{ maxWidth }}>
        <img
          className={styles['image']}
          src={image}
          data-src={dataSrc}
          role='presentation'
        />
      </div>
    );
  };

  const renderSubHeader = () => {
    if (!subheader) return null;

    return (
      <Text className={styles['subheader']}>
        { subheader }
      </Text>
    );
  };

  return (
    <div className={classnames(...classes)}>
      { renderIconImage() }
      <aside className={styles['aside']}>
        <Text
          font='a'
          size={7}
        >
          { header }
        </Text>

        { renderSubHeader() }
      </aside>
    </div>
  );
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
  icon: PropTypes.string,

  /**
   * simple variant
   */
  simple: PropTypes.bool,

  /**
   * small variant
   */
  small: PropTypes.bool,

  /**
   * bold variant
   */
  bold: PropTypes.bool,
  /**
   * text displayed below the main header
   */
  subheader: PropTypes.string,

  /**
   * image to be displayed via `src` tag
   */
  image: PropTypes.string,

  /**
   * dataSrc that is passed to the `<img>`
   */
  dataSrc: PropTypes.string,

  /**
   * use to set a max-width on the image.
   * Will be inlined via styles object
   */
  maxWidth: PropTypes.string,
};

ImageAside.defaultProps = {
  basic: true
};

export default ImageAside;
