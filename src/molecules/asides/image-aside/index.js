import React, { PropTypes } from 'react';
import Icon from 'atoms/icons/Icon';
import * as icons from 'assets/images';
import classnames from 'classnames';
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
          <img src={ icon } className={ styles.icon } />
      }

      <aside className={ styles.aside }>
        <h5 className={ styles.header }>{ header }</h5>

        { subheader && <p className={ styles.subheader }>{ subheader }</p> }

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
