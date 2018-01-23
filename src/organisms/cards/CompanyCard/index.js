import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import LinkWrapper from 'atoms/LinkWrapper';
import Text from 'atoms/Text';
import StarRating from 'molecules/StarRating';
import styles from './company_card.module.scss';

const CompanyCard = (props) => {
  const {
    starRating,
    imageAttr,
    linkUrl,
    className,
    variant
  } = props;

  const classes = cx(
    styles['company-card'],
    styles[variant],
    className
  );

  const ReadLink = () =>
    (<LinkWrapper
      type='secondary'
      variant={variant}
      className={styles.read}
      href={linkUrl}
    >
      <Text size={10}>Read</Text>
    </LinkWrapper>);

  const size = variant === 'large' ? '18px' : '12px';

  return (
    <LinkWrapper
      href={linkUrl}
      className={classes}
    >
      <div>
        <img className={styles.image} src={imageAttr.src} role='presentation' />
      </div>
      { starRating && <StarRating className={styles['star-rating']} rating={starRating} size={size} /> }
      { linkUrl && <ReadLink linkUrl={linkUrl} /> }
    </LinkWrapper>
  );
};

CompanyCard.propTypes = {
  starRating: PropTypes.number,
  linkUrl: PropTypes.string,
  className: PropTypes.string,
  imageAttr: PropTypes.object,
  variant: PropTypes.string,
};

export default CompanyCard;
