import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { camelCase, omit } from 'lodash';

import Icon from 'atoms/Icon';
import radioStyles from 'molecules/formfields/RadioField/radio_field.module.scss';
import styles from './radio_card.module.scss';


const isValid = collection => collection && collection.length && collection.length > 0;

const renderSections = (sections) => {
  if (!isValid(sections)) return null;

  return (
    <div className={styles['sections']}>
      { sections.map(renderSection) }
    </div>
  );
};

const renderSection = (section, idx) => {
  const { label, value } = section;

  return (
    <div key={`sec-item-${idx}`} className={styles['sections-item']}>
      <span>{label}</span>
      <div className={styles['sections-value']}>{value}</div>
    </div>
  );
};

const renderImage = (imgValues) => {
  const {
    img,
    iconProps,
  } = imgValues;

  if (iconProps) {
    return (
      <Icon
        {...iconProps}
      />
    );
  }

  if (img.image) {
    return (
      <img
        className={styles['image']}
        alt={img.label}
        src={img.image}
      />
    );
  }

  return null;
};

function RadioCard(props) {
  const {
    className,
    label,
    description,
    sections,
    image,
    iconProps,
    input,
    radioValue,
    children,
  } = props;

  const classes = classnames(
    styles['radio-card'],
    input.value === radioValue && styles['checked'],
    isValid(sections) && styles['sectioned'],
    className,
  );

  return (
    <div
      className={classes}
      {...omit(input, [ 'value', 'onClick' ])}
      onClick={() => input.onChange(radioValue)}
      id={`radio-${input.name}`}
      key={`radio-${radioValue}`}
    >
      <label
        className={styles['card']}
        htmlFor={`radio-${camelCase(radioValue)}`}
      >
        <div className={classnames(styles['radio-field'], radioStyles['radio-field'])}>
          <span
            className={classnames(radioStyles['label'], { [radioStyles.checked]: input.value === radioValue })}
          />

        </div>

        <div className={styles['content']}>
          <h4 className={styles['title']}>{label}</h4>
          { description &&
          <p className={styles['description']}>
            {description}
          </p>
          }
          { children }
          { renderSections(sections)}
        </div>

        { renderImage({ img: { image, label }, iconProps }) }
      </label>
    </div>
  );
}

RadioCard.propTypes = {
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,

  /**
   * bold label displayed in card
   */
  label: PropTypes.string.isRequired,

  /**
   * additional description displayed under label
   */
  description: PropTypes.string,

  /**
   * Sectioned data to display in the bottom of the card.
   */
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ),

  /**
   * optional image displayed below description
   */
  image: PropTypes.string,

  /**
   * optional icon displayed below description; `icon` overrides `image` prop;
   * This is the icon name from the [Icon component](/#icon).
   */
  iconProps: PropTypes.shape({
    icon: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
  }),

  /**
   * The props under the input key are passed from `redux-form` and spread into `<input />`.
   */
  input: PropTypes.object.isRequired,

  /**
   * value used to check if RadioCard is selected
   */
  radioValue: PropTypes.string.isRequired
};

export default RadioCard;
