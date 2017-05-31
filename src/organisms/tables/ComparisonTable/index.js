import React from 'react';
import { Col, Layout } from 'atoms/Layout';

import styles from './comparison_table.module.scss';

const renderRow = (props, colClass = 'col') => {
  const { children } = props;
  const renderCol = child =>
    <Col className={styles[colClass]} mediumCols={child.props.cols}>{child}</Col>;

  return (
    <Layout className={styles['row']}>
      { React.Children.map(children, renderCol) }
    </Layout>
  );
};

const TableHeader = props => renderRow(props, 'col-head');
const TableRow = props => renderRow(props);

function ComparisonTable(props) {
  const { children } = props;

  return (
    <div className={styles['comparison-table']}>
      { children }
    </div>
  );
}

export {
  ComparisonTable as default,
  TableHeader,
  TableRow,
};
