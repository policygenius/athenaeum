import React, { PropTypes } from 'react';
import classnames from 'classnames';

import Icon from 'atoms/icons/Icon';
import TextComponent from 'atoms/TextComponents'
import * as icons from 'assets/images';
import styles from './image-aside.module.scss';

function ImageAside ( props ) {
  const {
    className,
    header,
    icon,
    subheader,
    type
  } = props;

  return (
    <div className={ classnames(styles[type], className) }>

      { icons[icon] ?
          <Icon
            icon={ icon }
            wrapperClassName={ styles.icon } />
        :
          <div className={ styles.icon }>
            <img src={ icon } />
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
   * supply any additional class names
   */
  className: PropTypes.string,

  /**
   * main header text for aside
   */
  header: PropTypes.string.isRequired,

  /**
   * icon to display in aside;
   * can be a URL or name of icon from our library
   */
  icon: PropTypes.string.isRequired,

  /**
   * text displayed below the main header
   */
  subheader: PropTypes.string,

  /**
   * type of image aside
   */
  type: PropTypes.string.isRequired,
}

export default ImageAside;
