import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './img.module.scss';

const strParams = '&fit=clip&auto=compress&auto=format&ch=Width,DPR,Save-Data';

const imgixSrcset = ( src, maxWidth = Infinity, maxHeight = Infinity ) => `
  https://policygenius-images.imgix.net/${src}?w=${Math.min(maxWidth, 1025)}&h=${Math.min(maxHeight, 1025)}${strParams} 1026w,
  https://policygenius-images.imgix.net/${src}?w=${Math.min(maxWidth, 768)}&h=${Math.min(maxHeight, 768)}${strParams} 769w,
  https://policygenius-images.imgix.net/${src}?w=${Math.min(maxWidth, 320)}&h=${Math.min(maxHeight, 320)}${strParams} 321w
`;

const createName = str => typeof str === 'string'
  ? str.replace(/\..+/, '').replace(/\W/g, ' ').trim()
  : 'PolicyGenius';

function Img(props) {
  const {
    className,
    src,
    srcSet,
    imgixSrc,
    alt,
    title,
    maxWidth = Infinity,
    maxHeight = Infinity,
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

  const imgixSrcStr = `https://policygenius-images.imgix.net/${imgixSrc}` +
    `&w=${Math.min(maxWidth, 768)}` +
    `&h=${Math.min(maxHeight, 768)}` +
    '?fit=clip&auto=format&auto=compress';

  return (
    <img
      className={classes}
      alt={alt || createName(imgixSrc || src)}
      title={title || createName(imgixSrc || src)}
      src={src || imgixSrcStr}
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

  /**
   * Used with imgixSrc to prevent larger than necessary images from loading
   */
  maxHeight: PropTypes.string,
};

Img.defaultProps = {
  alt: '',
  imgixSrc: 'photos/alexander-dummer-150646.jpg'
};

export default Img;
