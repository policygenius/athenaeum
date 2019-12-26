import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import camelCase from 'lodash/camelCase';
import omit from 'lodash/omit';

import Icon from 'atoms/Icon';
import radioStyles from 'molecules/formfields/RadioField/radio_field.module.scss';
import styles from './radio_card.module.scss';

const isValid = (collection) => collection && collection.length && collection.length > 0;

const renderSections = (sections) => {
  if (!isValid(sections)) return null;

  return (
    <div className={styles['sections']}>
      { sections.map(renderSection) }
    </div>
  );
};

const renderSection = (section, idx) => {
  const { label, value, sublabel } = section;

  return (
    <div key={`sec-item-${idx}`} className={styles['sections-item']}>
      <span className={styles['sections-label']}>{label}</span>
      <div className={styles['sections-value']}>{value}</div>
      { sublabel ? <span>{sublabel}</span> : null }
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
        className={styles['icon']}
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
    renderProp,
  } = props;

  const classes = classnames(
    styles['radio-card'],
    input.value === radioValue && styles['checked'],
    input.value && input.value !== radioValue && styles['not-selected'],
    isValid(sections) && styles['sectioned'],
    className,
  );

  if (renderProp) {
    return (
      <div
        className={classes}
        {...omit(input, [ 'value', 'onClick' ])}
        onClick={() => input.onChange(radioValue)}
        id={`radio-${input.name}`}
        key={`radio-${radioValue}`}
      >
        { /* eslint-disable jsx-a11y/label-has-for */ }
        <label
          className={styles['card']}
          htmlFor={`radio-${camelCase(radioValue)}`}
        >
          {
            renderProp({
              radioButton:
  <div className={classnames(radioStyles['radio-field'], styles['radio-field'])}>
    <span
      className={classnames(radioStyles['label'], { [radioStyles.checked]: input.value === radioValue }, styles['label'])}
    />

  </div>,
              selected: input.value === radioValue,
              notSelected: input.value && input.value !== radioValue,
            })
          }

        </label>
        { /* eslint-enable jsx-a11y/label-has-for */ }
      </div>
    );
  }

  return (
    <div
      className={classes}
      {...omit(input, [ 'value', 'onClick' ])}
      onClick={() => input.onChange(radioValue)}
      id={`radio-${input.name}`}
      key={`radio-${radioValue}`}
    >
      { /* eslint-disable jsx-a11y/label-has-for */ }
      <label
        className={styles['card']}
        htmlFor={`radio-${camelCase(radioValue)}`}
      >
        <div className={classnames(radioStyles['radio-field'], styles['radio-field'])}>
          <span
            className={classnames(radioStyles['label'], { [radioStyles.checked]: input.value === radioValue }, styles['label'])}
          />

        </div>

        <div className={styles['content']}>
          <h4 className={styles['title']}>{label}</h4>
          { description
          && (
            <p className={styles['description']}>
              {description}
            </p>
          )}
          { children }
          { renderSections(sections)}
        </div>

        {
          (image || iconProps)
            && (
              <div className={styles['image-wrapper']}>
                { renderImage({ img: { image, label }, iconProps }) }
              </div>
            )
        }
      </label>
      { /* eslint-enable jsx-a11y/label-has-for */ }
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
  label: (props) => {
    const { label, renderProp } = props;

    if (!label && !renderProp) {
      return new Error(
        'Label prop is required',
      );
    }

    return null;
  },

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
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
      sublabel: PropTypes.string
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
  radioValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,

  /**
   * Provide a function that returns a React component to have great control over the internal look of the card.
   *
   * The `renderProp` function will be passed the `radioButton`, with all of its functionality, and `selected`/`notSelected` booleans for styling based on selected state
   */
  renderProp: PropTypes.func,
};

export default RadioCard;
