import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from 'atoms/Button';
import LinkWrapper from 'atoms/LinkWrapper';
import Spacer from 'atoms/Spacer';

import IntroText from './IntroText';
import styles from './main_nav_intro.module.scss';

function Intro(props) {
  const {
    cta,
    imgSrc,
    linkHref,
    product
  } = props;

  return (
    <li className={classnames(styles['intro'], styles['has-cta'])}>
      <IntroText
        product={product}
      />

      <Spacer medium />

      <div className={styles['cta-container']}>
        <div className={styles['cta']}>
          <LinkWrapper
            rel='nofollow'
            data-behavior='TrackAnalyticsOnClick'
            data-analytics-event-data={`{&quot;name&quot;:&quot;Used main nav&quot;,&quot;properties&quot;:{&quot;navigateTo&quot;:&quot;${linkHref}&quot;,&quot;navigateFrom&quot;:&quot;/templates/main_nav&quot;,&quot;clickedFrom&quot;:&quot;mega menu&quot;}}`}
            href={linkHref}
            variant='no-text-decoration'
            className={styles['button']}
          >
            <Button
              variant='action'
            >
              { cta }
            </Button>
          </LinkWrapper>
          <span className={styles['info']}></span>
        </div>

        <img alt='PolicyGenius' className={styles['info-image']} src={imgSrc} />
      </div>
    </li>
  );
}

Intro.propTypes = {
  cta: PropTypes.string,
  product: PropTypes.string,
  imgSrc: PropTypes.string,
  linkHref: PropTypes.string,
};

export default Intro;
