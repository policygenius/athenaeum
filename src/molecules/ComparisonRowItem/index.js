import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Layout, Col } from 'atoms/Layout';
import { Div } from 'atoms/Elementals';
import Icon from 'atoms/Icon';

import styles from './comparison_row_item.module.scss';


function ComparisonRowItem(props) {
  const {
    className,
    label,
    checked,
    spacer,
  } = props;

  const classes = [
    styles['comparison-row-item'],
    className,
  ];

  const icon = checked ? 'checkmark' : 'closeAccent';

  return (
    <Div spacer={spacer} className={classnames(...classes)}>
      <Icon className={styles['icon-lg']} icon={icon} />

      <Layout className={styles['lockup-layout']}>
        <Col smallCols={10} className={styles['lockup-col']}>
          { label }
        </Col>
        <Col smallCols={2} className={styles['lockup-col-icon']}>
          <Icon className={styles['icon-sm']} icon={icon} />
        </Col>
      </Layout>
    </Div>
  );
}


ComparisonRowItem.propTypes = {
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,
  /**
   * label/name for data
   */
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  /**
   * checkmark or x icon
   */
  checked: PropTypes.bool,
  /**
   * Standard spacer sizing from 0-12.
   */
  spacer: PropTypes.number,
};

ComparisonRowItem.defaultProps = {
  spacer: 1,
};

export default ComparisonRowItem;
