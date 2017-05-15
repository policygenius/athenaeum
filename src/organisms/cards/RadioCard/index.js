import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { camelCase } from 'lodash';

import radioStyles from 'molecules/formfields/RadioField/radio_field.module.scss';
import styles from './radio_card.module.scss';

function RadioCard(props) {
  const {
    children,
    className,
    label,
    description,
    image,
    input,
  } = props;

  return (
    <div className={classnames(styles['radio-card'], className)}>
      <input
        type='radio'
        name={input.name}
        value={input.value}
        id={`radio-${camelCase(input.value)}`}
        className={styles['radio-button']}
        {...input}
      />

      <label className={styles['card']} htmlFor={`radio-${camelCase(input.value)}`}>
        <div className={classnames(styles['radio-field'], radioStyles['radio-field'])}>
          <span className={radioStyles['label']}></span>
        </div>
        <div className={styles['content']}>
          <h4 className={styles['title']}>{label}</h4>
          { description && <p className={styles['description']}>{description}</p> }
          { children }
        </div>
        { image && <img className={styles['image']} alt={label} src={image} />}
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
  label: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  /**
   * The props under the input key are passed from `redux-form` and spread into `<input />`.
   */
  input: PropTypes.object.isRequired
};

export default RadioCard;
