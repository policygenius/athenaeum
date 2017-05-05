import React from 'react';
import styles from './comparison_table.module.scss';

function ComparisonTable( props ) {
  const {
    children
  } = props;

  return (
    <div className={styles['comparison-table']}>
      { React.Children.map(children, child =>
        <div className={styles['child-wrapper']}>
          { child }
        </div>
      )}
    </div>
  );
}

export default ComparisonTable;
