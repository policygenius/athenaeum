import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from 'atoms/Icon';
import StackedCard from 'organisms/cards/StackedCard';
import styles from './contact_card.module.scss';

function cleanPhoneString( phoneString ) {
  return phoneString.replace(/[^0-9]+/g, '');
}

function ContactCard( props ) {
  const {
    phoneNumber,
    chatClick,
    chatText,
    className,
    inverted
  } = props;

  const classes = [
    styles['contact'],
    inverted && styles['inverted'],
    className
  ];

  return (
    <StackedCard className={classnames(...classes)} inverted={inverted}>
      {phoneNumber &&
        <a className={styles['link-row']} href={`tel:${cleanPhoneString(phoneNumber)}`}>
          <Icon icon='phone' className={styles['icon']} />
          { phoneNumber }
        </a>
      }

      <a className={styles['link-row']} onClick={chatClick}>
        <Icon icon='chat' className={styles['icon']} />
        { chatText }
      </a>
    </StackedCard>
  );
}

ContactCard.propTypes = {
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,
  /**
   * Formatted phone number string. example: 1(855) 867-5309
  */
  phoneNumber: PropTypes.string,
  /**
   * Destination url to trigger chat.
  */
  chatClick: PropTypes.func.isRequired,
  /**
   * Text for the bottom of the contact card.
  */
  chatText: PropTypes.string,
  /**
   * Inverted color scheme.
   */
  inverted: PropTypes.bool
};

ContactCard.defaultProps = {
  chatText: 'Chat with an Expert',
  inverted: false
};

export default ContactCard;
