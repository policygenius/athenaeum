import React from 'react';
import PropTypes from 'prop-types';
import Col from 'atoms/Layout/Col';
import Layout from 'atoms/Layout';
import classnames from 'classnames';
import styles from './comparison_table.module.scss';

function ComparisonTableRow(props) {
  const {
    header,
    children
  } = props;

  return (
    <Layout className={styles.layout}>
      {React.Children.map(children, child =>
        <Col
          mediumCols={child.props.cols}
          className={classnames({ [styles.header]: header, [styles.row]: !header })}
        >
          {child}
        </Col>
      )}
    </Layout>
  );
}

ComparisonTableRow.propTypes = {
  header: PropTypes.bool
};

export default ComparisonTableRow;
