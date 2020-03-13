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
    rel,
    target,
    imageAttr,
    linkUrl,
    linkText,
    className,
    variant,
    gatsbyStars,
  } = props;

  const classes = cx(
    styles['company-card'],
    styles[variant],
    className
  );

  const ReadLink = () => (
    <LinkWrapper
      type='secondary'
      variant={variant}
      rel={rel && 'nofollow'}
      target={target && '_blank'}
      className={styles.read}
      href={linkUrl}
    >
      <Text size={10}>{linkText}</Text>
    </LinkWrapper>
  );

  const size = variant === 'large' ? '18px' : '12px';

  return (
    <LinkWrapper
      href={linkUrl}
      rel={rel && 'nofollow'}
      target={target && '_blank'}
      className={classes}
    >
      <div>
        <img className={styles.image} src={imageAttr.src} alt='' />
      </div>
      { starRating && <StarRating className={styles['star-rating']} rating={starRating} size={size} /> }
      { !!gatsbyStars && gatsbyStars }
      { linkUrl && <ReadLink linkUrl={linkUrl} /> }
    </LinkWrapper>
  );
};

CompanyCard.propTypes = {

  /**
   * Will add a star rating
  */
  starRating: PropTypes.number,

  /**
   * If true, sets rel=nofollow to <a> tag
  **/
  rel: PropTypes.bool,

  /**
   * If true, sets target=_blank
  **/
  target: PropTypes.bool,

  /**
   * The url for the link
  **/
  linkUrl: PropTypes.string,

  /**
   * The text for the link
  **/
  linkText: PropTypes.string,

  /**
   * Will add a new ClassName to any other classNames provided in component's index.js file
  **/
  className: PropTypes.string,

  /**
   * Contains all attributes belonging to the image (ie. src)
  **/
  imageAttr: PropTypes.object,

  /**
   * Possible card sizes are: 'large' or 'small'
  **/
  variant: PropTypes.string,
  /**
   * Can pass in react component
  **/
  gatsbyStars: PropTypes.element,


};

CompanyCard.defaultProps = {
  linkText: 'Read'
};

export default CompanyCard;
