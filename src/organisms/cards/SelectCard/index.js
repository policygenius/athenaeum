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
    onChange,
    value
  } = props;

  return (
    <div className={classnames( styles.select, className )}>
      <SelectField
        type='select-card'
        label={label}
        placeholder={placeholder}
        selectOptions={selectOptions}
        input={{
          onChange,
          value
        }}
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
  label: PropTypes.string,

  /**
   * url for footer link
   */
  linkUrl: PropTypes.string,

  /**
   * onChange callback for select field
   */
  onChange: PropTypes.func.isRequired,

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
   * value passed to select field
   */
  value: PropTypes.string
};

export default SelectCard;

