import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './img.module.scss';

if (typeof window !== 'undefined') {
  require('lazysizes/plugins/rias/ls.rias.min');
  require('lazysizes/lazysizes.min');
}

const strParams = '?fit=max&auto=format&ch=Width,DPR&w={width}';

const imgixSrcStr = src => `https://policygenius-images.imgix.net/${src}${strParams}`;

const imgixSrcset = src => `
  https://policygenius-images.imgix.net/${src}${strParams}&dpr=1 1x,
  https://policygenius-images.imgix.net/${src}${strParams}&dpr=2 2x,
  https://policygenius-images.imgix.net/${src}${strParams}&dpr=3 3x,
`;

const createName = (str) => {
  let filename = '';

  if (typeof str === 'string') {
    filename = str.match(/([^/]*)(?=\.)/);
  }

  return filename ? filename[0].replace(/(\W+|_)/g, ' ').trim() : 'PolicyGenius';
};

function Img(props) {
  const {
    className,
    src,
    srcSet,
    imgixSrc,
    alt,
    title,
    mobileSrc,
    tabletSrc,
    mobileImgixSrc,
    tabletImgixSrc,
    lazy,
    ...rest
  } = props;

  const isPicture = mobileSrc !== undefined ||
    tabletSrc !== undefined ||
    mobileImgixSrc !== undefined ||
    tabletImgixSrc !== undefined;

  const classes = cx(
    styles['img'],
    'lazyload',
    !lazy && 'unlazy',
    className,
  );

  const pictureClasses = cx(
    (mobileImgixSrc === null || mobileSrc === null) && styles['hide-mobile-image'],
    (tabletImgixSrc === null || tabletSrc === null) && styles['hide-tablet-image'],
    className,
  );

  const srcset = (() => {
    if (srcSet) { return srcSet; }
    if (src) { return undefined; }

    return imgixSrcset(`${imgixSrc}`);
  })();

  // TODO: Consider adding a noscript tag to handle a situation where lazysizes doesn't work.
  if (isPicture) {
    const defaultSrc = src || imgixSrcStr(imgixSrc);

    return (
      <picture className={pictureClasses}>
        { ( mobileImgixSrc || mobileSrc ) && <source srcSet={mobileSrc || imgixSrcStr(mobileImgixSrc)} media='(max-width: 767px)' />}
        { ( tabletImgixSrc || tabletSrc ) && <source srcSet={tabletSrc || imgixSrcStr(tabletImgixSrc)} media='(max-width: 1024px)' />}
        <img
          className={cx(styles.img, 'lazyload')}
          alt={alt || createName(src || imgixSrc)}
          title={title || createName(src || imgixSrc)}
          data-src={defaultSrc}
          data-sizes='auto'
          src={lazy ? undefined : defaultSrc}
          {...rest}
        />
      </picture>
    );
  }

  return (
    <img
      className={classes}
      alt={alt || createName(src || imgixSrc)}
      title={title || createName(src || imgixSrc)}
      data-src={src || imgixSrcStr(imgixSrc)}
      data-srcset={srcset}
      data-sizes={lazy ? 'auto' : '100vw'}
      src={lazy ? undefined : src || imgixSrcStr(imgixSrc)}
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
   * When used, will create a <source> for a <picture> element for mobile.
   * If null, the image will not display on mobile
   */
  mobileSrc: PropTypes.string,
  /**
   * When used, will create a <source> for a <picture> element for tablet
   * If null, the image will not display on tablet
   */
  tabletSrc: PropTypes.string,
  /**
   * Alternate image for mobile. When used, will create a <source> for a <picture> element for mobile. Will use imgix custom string.
   * If null, the image will not display on mobile
   */
  mobileImgixSrc: PropTypes.string,
  /**
   * Alternate image for tablet. When used, will create a <source> for a <picture> element for tablet. Will use imgix. Will use imgix custom string.
   * If null, the image will not display on tablet
   */
  tabletImgixSrc: PropTypes.string,
  /**
   * Set to false to turn off lazyloading
   */
  lazy: PropTypes.bool,
};

Img.defaultProps = {
  alt: '',
  imgixSrc: 'photos/alexander-dummer-150646.jpg',
  lazy: true
};

export default Img;
