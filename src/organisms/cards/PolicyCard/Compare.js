import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Text from 'atoms/Text';
import Hide from 'wrappers/Hide';
import Spacer from 'atoms/Spacer';
import CheckBoxField from 'molecules/formfields/CheckBoxField';
import styles from './policy_card.module.scss';

const Compare = ({ compareSelected, onCompare, name }) =>
  <Hide hideOn='mobile' className={styles['compare']}>
    <div
      id={`${name}-checkbox-wrapper`}
      className={styles['checkbox-wrapper']}
      onClick={onCompare}
    >
      <Text
        color='neutral-3'
        size={7}
        light
        className={classnames(compareSelected && styles['checked'])}
      >
        Compare
      </Text>
      <Spacer spacer={1} />
      <CheckBoxField
        input={{
          value: compareSelected,
          name
        }}
      />
    </div>
  </Hide>

;

Compare.propTypes = {
  compareSelected: PropTypes.bool,
  onCompare: PropTypes.func,
  name: PropTypes.string,
};

export default Compare;
