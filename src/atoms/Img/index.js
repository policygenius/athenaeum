import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './img.module.scss';

function Img(props) {
  const {
    className,
    src,
    ...rest
  } = props;

  const classes = [
    styles['img'],
    className,
  ];

  return (
    <img
      className={classnames(...classes)}
      alt=''
      src={src}
      {...rest}
    />
  );
}


Img.propTypes = {
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,

  /**
   * The src url for the image
   */
  src: PropTypes.string,

  /**
   * The img alt for the image. Defaults to an empty string.
   */
  alt: PropTypes.string,
};

Img.defaultProps = {
  alt: ''
};

export default Img;
