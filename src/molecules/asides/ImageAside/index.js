import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from 'atoms/Icon';
import TextComponent from 'atoms/TextComponent';
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

  const variant = classnames(
    { [styles.basic]: basic },
    { [styles.centered]: centered },
    { [styles.compact]: compact },
    { [styles.simple]: simple },
    { [styles.small]: small },
    { [styles.bold]: bold }
  );

  return (
    <div className={classnames( variant, className )}>

      { icons[icon] ?
        <Icon
          icon={icon}
          className={styles.icon}
        />
        :
        <div
          className={styles['image-wrapper']}
          style={{ maxWidth }}
        >
          <img
            className={styles.image}
            src={image}
            data-src={dataSrc}
            role='presentation'
          />
        </div>
      }

      <aside className={styles.aside}>
        <TextComponent
          className={styles.header}
        >
          { header }
        </TextComponent>

        { subheader &&
          <TextComponent
            className={styles.subheader}
          >
            { subheader }
          </TextComponent>
        }
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
