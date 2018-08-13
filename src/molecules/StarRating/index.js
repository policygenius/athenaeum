import React from 'react'; import PropTypes from 'prop-types';
import classnames from 'classnames';
import times from 'lodash/times';
import Icon from 'atoms/Icon';
import styles from './star_rating.module.scss';

function StarRating(props) {
  const {
    className,
    size,
    rating,
  } = props;

  const classes = classnames(
    styles['star-rating'],
    styles.stars,
    styles[`stars-${rating}`],
    className,
  );

  return (
    <span className={classes}>
      {
        times(5, i =>
          <Icon
            key={i}
            className={classnames(
              styles.star,
              {
                [styles['filled-in']]: i < rating
              }
            )}
            icon='star2'
            width={size}
            height={size}
            renderSVGDOM
          />
        )
      }
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

  /**
   * Number of stars that are filled in.
   */
  rating: PropTypes.number.isRequired,
};

StarRating.defaultProps = {
  height: '12px',
  // Place any default props here.
};

export default StarRating;
