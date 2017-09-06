import React from 'react';
import PropTypes from 'prop-types';
import Text from 'atoms/Text';
import Hide from 'wrappers/Hide';
import Spacer from 'atoms/Spacer';
import CheckBoxField from 'molecules/formfields/CheckBoxField';
import styles from './policy_card.module.scss';

const Compare = ({ compareSelected, onCompare }) =>
  <Hide hideOn='small' className={styles['compare']}>
    <Text
      color='neutral-3'
      light
      className={compareSelected && styles['checked']}
    >
      Compare
    </Text>
    <Spacer spacer={1} />
    <CheckBoxField
      input={{
        onChange: onCompare,
        value: compareSelected
      }}
    />
    <div className={styles['divider']} />
  </Hide>

;

Compare.propTypes = {
  compareSelected: PropTypes.bool,
  onCompare: PropTypes.func
};

export default Compare;
