import React from 'react'; import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from 'atoms/Icon';
import styles from './star_rating.module.scss';

function StarRating(props) {
  const {
    className,
    size,
    rating,
    ...rest
  } = props;

  const classes = classnames(
    styles['star-rating'],
    styles.stars,
    styles[`stars-${rating}`],
    className,
  );

  return (
    <span className={classes} {...rest}>
      <Icon className={styles.star} icon='star' width={size} height={size} />
      <Icon className={styles.star} icon='star' width={size} height={size} />
      <Icon className={styles.star} icon='star' width={size} height={size} />
      <Icon className={styles.star} icon='star' width={size} height={size} />
      <Icon className={styles.star} icon='star' width={size} height={size} />
    </span>
  );
}


StarRating.propTypes = {
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,

  /**
   * Add custom inline style
   */
  style: PropTypes.object,

  /**
   * Pixel amount for height and width of stars.
   */
  size: PropTypes.string,
  rating: PropTypes.number
};

StarRating.defaultProps = {
  height: '12px'
  // Place any default props here.
};

export default StarRating;
