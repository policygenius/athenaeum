import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './img.module.scss';

const imgixSrcset = src => `
  ${src}?fit=crop&w=320w&auto=format 320w,
  ${src}?fit=crop&w=768w&auto=format 768w,
  ${src}?fit=crop&w=1025&auto=format 1025w
`;

function Img(props) {
  const {
    className,
    src,
    srcSet,
    imgixSrc,
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
      src={src || `http://policygenius-images.imgix.net/${imgixSrc}?fit=crop&w=768&auto=format&q=40`}
      srcSet={srcSet || imgixSrcset(`http://policygenius-images.imgix.net/${imgixSrc}`)}
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
   * Recommended: The Imgix base url for the image. Will handle all optomizations automagically.
   * https://docs.imgix.com/apis/url/adjustment/usmrad
   */
  imgixSrc: PropTypes.string,

  /**
   * The src url for the image. If you use this, it will override the Imgix src.
   */
  src: PropTypes.string,

  /**
   * The srcset for the image. If you use this, it will override the Imgix src.
   */
  srcSet: PropTypes.string,

  /**
   * The img alt for the image. Defaults to an empty string.
   */
  alt: PropTypes.string,
};

Img.defaultProps = {
  alt: '',
  imgixSrc: 'photos/alexander-dummer-150646.jpg'
};

export default Img;
