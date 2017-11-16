import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './img.module.scss';

const imgixSrcset = ( src, maxWidth = Infinity ) => `
  https://policygenius-images.imgix.net/${src}?fit=clip&w=${Math.min(maxWidth, 1025)}&auto=format&q=50&ch=Width,DPR,Save-Data 1026w,
  https://policygenius-images.imgix.net/${src}?fit=clip&w=${Math.min(maxWidth, 768)}&auto=format&q=50&ch=Width,DPR,Save-Data 769w,
  https://policygenius-images.imgix.net/${src}?fit=clip&w=${Math.min(maxWidth, 320)}&auto=format&q=50&ch=Width,DPR,Save-Data 321w
`;

const createName = str => str.replace(/\..+/, '').replace(/\W/g, ' ').trim();

function Img(props) {
  const {
    className,
    src,
    srcSet,
    imgixSrc,
    alt,
    title,
    maxWidth = Infinity,
    ...rest
  } = props;

  const classes = cx(
    styles['img'],
    className,
  );

  const srcset = (() => {
    if (srcSet) { return srcSet; }
    if (src) { return undefined; }

    return imgixSrcset(`${imgixSrc}`, maxWidth);
  })();

  return (
    <img
      className={classes}
      alt={alt || createName(imgixSrc || src)}
      title={title || createName(imgixSrc || src)}
      src={src || `https://policygenius-images.imgix.net/${imgixSrc}?fit=clip&w=${Math.min(maxWidth, 768)}&auto=format&q=40`}
      srcSet={srcset}
      sizes='100vw'
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
   * The img alt for the image. Defaults to an improved version of the filename.
   */
  alt: PropTypes.string,

  /**
   * The img title for the image. Defaults to an improved version of the filename.
   */
  title: PropTypes.string,

  /**
   * Used with imgixSrc to prevent larger than necessary images from loading
   */
  maxWidth: PropTypes.string,
};

Img.defaultProps = {
  alt: '',
  imgixSrc: 'photos/alexander-dummer-150646.jpg'
};

export default Img;
