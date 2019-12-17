import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from 'atoms/Icon';
import Button from 'atoms/Button';
import styles from './partner_card.module.scss';

function PartnerCard(props) {
  const {
    className,
    icon,
    actionCopy,
    onButtonClick,
    actionLink,
    centerLabel,
    centerText
  } = props;

  const classes = [
    styles['partner-card'],
    className,
  ];

  return (
    <div className={classnames(...classes)}>
      <div className={styles['cell']}>
        <Icon icon={icon} />
      </div>
      <div className={styles['cell']}>
        <h2 className={styles['label']}>{centerLabel}</h2>
        <span className={styles['a5']}>
          {centerText}
        </span>
      </div>
      <div className={styles['cell']}>
        <Button
          variant='info'
          outline
          text={actionCopy}
          href={actionLink}
          onClick={onButtonClick}
        />
      </div>
    </div>
  );
}

PartnerCard.propTypes = {

  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,

  /**
   * The name of the icon to render
   */
  icon: PropTypes.string,

  /**
   * Text inside the 'Call to Action' button
   */
  actionCopy: PropTypes.string,

  /**
   * 'Call to Action' button link
   */
  actionLink: PropTypes.string,

  /**
   * Alternatively, may provide a callback for the button
   */
  onButtonClick: PropTypes.func,

  /**
   * Provides context for the center text
   */
  centerLabel: PropTypes.string,

  /**
   * Short and snappy center text
   */
  centerText: PropTypes.string.isRequired
};

PartnerCard.defaultProps = {
  actionCopy: 'Shop Now',
  centerLabel: 'BBB Rating',
  centerText: 'A',
  icon: 'pencil'
};

export default PartnerCard;
