import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import SVGInline from 'react-svg-inline';
import { icons as ICONS } from './constants';

import styles from './icons.module.scss';

const checkLS = () => typeof window === 'undefined' || !!window.lazySizes;

class Icon extends React.Component {
  constructor() {
    super();

    this.state = {
      svgString: null,
    };
  }

  componentDidMount() {
    const { renderSVGDOM, icon } = this.props;

    if (renderSVGDOM && icon) {
      this.getSVG(5);
    }
  }

  getSVG = (count, option) => {
    fetch(this.svgSrc, option)
      .then(data => data.text())
      .then((svg) => {
        this.setState({
          svgString: svg,
        });
      })
      .catch((error) => {
        if (count === 1) {
          throw error;
        }

        return setTimeout(() => this.getSVG(count - 1, { cache: 'no-cache' }), 1000);
      });
  }

  get svgSrc() {
    return `https://static.policygenius.com/svgs/${this.sanitizedIcon}.svgz`;
  }

  get sanitizedIcon() {
    const { icon } = this.props;

    return icon.replace(/[^a-zA-Z0-9_-]/, '');
  }

  render() {
    const {
      className,
      onClick,
      height,
      width,
      inline,
      icon,
      lazy,
      alt,
      title,
      renderSVGDOM,
      ...rest
    } = this.props;

    if (!icon) { return null; }

    const wrapperProps = {
      className: cx(
        styles['icon-wrapper'],
        onClick && styles.clickable,
        inline && styles.inline,
        inline && styles[inline],
        className
      ),
      onClick,
      style: {
        width,
        height
      },
      ...rest
    };

    if (renderSVGDOM && this.state.svgString) {
      return (
        <span {...wrapperProps} >
          <SVGInline
            svg={this.state.svgString}
          />
        </span>
      );
    }

    const isLazy = lazy && checkLS();
    const sanitizedIcon = this.sanitizedIcon;
    const src = this.svgSrc;

    // lazyload css class comes from Img component
    return (
      <span {...wrapperProps} >
        <img
          className={cx(
            styles.img,
            isLazy && 'lazyload'
          )}
          alt={alt || sanitizedIcon}
          title={title || sanitizedIcon}
          data-src={isLazy ? src : undefined}
          src={isLazy ? undefined : src}
          {...rest}
        />
      </span>
    );
  }
}


Icon.propTypes = {
  /**
   * Supply any additional class names. Resize the icon via the parent's stylesheet.
   */
  className: PropTypes.string,
  /**
   * The icon you'd like to display from our cloud library.
   */
  icon: PropTypes.oneOf(ICONS).isRequired,
  /**
   * Click handler for the wrapper div around the svg
   */
  onClick: PropTypes.func,
  /**
   * Override the default height of the icon. Icon will maintain its proportions.
   */
  height: PropTypes.string,
  /**
   * Override the default width of the icon. Icon will maintain its proportions.
   */
  width: PropTypes.string,
  /**
   * For use with another component e.g. Text. Vertically aligns to the middle, adds margin.
   */
  inline: PropTypes.oneOfType([
    PropTypes.oneOf([ 'left', 'right' ]),
    PropTypes.bool
  ]),
  /**
   * Set to false to turn off lazyloading.
   */
  lazy: PropTypes.bool,
  /**
   * Defaults to icon name.
   */
  alt: PropTypes.string,
  /**
   * Defaults to icon name.
   */
  title: PropTypes.string,

  /**
   * Renders full SVG DOM element for requested icon
   */
  renderSVGDOM: PropTypes.bool,
};

Icon.defaultProps = {
  lazy: true
};

export default Icon;
