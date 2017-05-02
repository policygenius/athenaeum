import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import LinkWrapper from 'atoms/LinkWrapper';
import SelectField from 'molecules/formfields/SelectField';
import styles from './select-card.module.scss';


function SelectCard( props ) {
  const {
    className,
    label,
    placeholder,
    selectOptions,
    footerText,
    linkUrl,
    onClick,
    input
  } = props;

  return (
    <div className={classnames( styles.select, className )}>
      <SelectField
        type='select-card'
        label={label}
        placeholder={placeholder}
        selectOptions={selectOptions}
        input={input}
      />

      <footer className={styles.footer}>
        <div className={styles['footer-link-wrapper']}>
          <LinkWrapper
            href={linkUrl}
            className={styles.link}
            onClick={onClick}
          >
            { footerText }
          </LinkWrapper>
        </div>
      </footer>
    </div>
  );
}

SelectCard.propTypes = {
  /**
   * optional additional class name for card
   */
  className: PropTypes.string,

  /**
   * text for footer link
   */
  footerText: PropTypes.string.isRequired,

  /**
   * label for select field
   */
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

  /**
   * url for footer link
   */
  linkUrl: PropTypes.string,

  /**
   * onClick callback for footer link
   */
  onClick: PropTypes.func,

  /**
   * placeholder for select field
   */
  placeholder: PropTypes.string,

  /**
   * array of select options for select field
   */
  selectOptions: PropTypes.array.isRequired,

  /**
   * Redux Form input object; pass any variables necessary for input change here
   */
  input: PropTypes.object
};

export default SelectCard;

