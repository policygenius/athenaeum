import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import LinkWrapper from 'atoms/LinkWrapper';
import Spacer from 'atoms/Spacer';

import IntroText from './IntroText';
import styles from './main_nav_intro.module.scss';

class Intro extends Component {
  constructor() {
    super();

    this.state = {
      loadImg: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.active && !this.state.loadImg) {
      this.setState({ loadImg: true });
    }
  }

  render() {
    const {
      cta,
      imgSrc,
      linkHref,
      product,
    } = this.props;

    const imgProps = {
      'data-src': imgSrc,
    };

    if (this.state.loadImg) {
      imgProps.src = imgSrc;
    }

    const classes = [
      styles['intro'],
      cta && styles['has-cta'],
    ];

    return (
      <li className={classnames(...classes)}>
        <IntroText
          product={product}
        />

        <Spacer medium />

        { cta &&
        <div className={styles['cta-container']}>
          <div className={styles['cta']}>
            <LinkWrapper
              rel='nofollow'
              href={linkHref}
              variant='no-text-decoration'
              className={styles['button-wrapper']}
            >
              {/* <Button /> component requires <Icon />, making it too bloated for use here */}
              <button
                className={classnames(styles['button'], styles['action'])}
              >
                { cta }
              </button>
            </LinkWrapper>
            <span className={styles['info']}></span>
          </div>

          <img
            alt='PolicyGenius'
            className={styles['info-image']}
            {...imgProps}
          />
        </div>
      }
      </li>
    );
  }
}

Intro.propTypes = {
  cta: PropTypes.string,
  product: PropTypes.string,
  imgSrc: PropTypes.string,
  linkHref: PropTypes.string,
};

export default Intro;
