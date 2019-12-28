/* eslint-disable react/no-multi-comp */
import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import {
  Col,
  Layout,
} from 'atoms/Layout';
import Text from 'atoms/Text';
import Spacer from 'atoms/Spacer';
import Tooltip from 'atoms/Tooltip';

import styles from './comparison_table.module.scss';

const ComparisonTable = (props) => {
  const {
    children, expandable, expanded, tableItems
  } = props;
  const expandableClass = expandable && !expanded ? 'table-expandable' : false;
  const tableClass = cx(
    styles['comparison-table'],
    expandableClass && styles[expandableClass]
  );

  return (
    <div className={tableClass}>
      {
        React.Children.map(children, (child) => React.isValidElement(child) ? React.cloneElement(child, { expandable, expanded, tableItems }) : child)
      }
    </div>
  );
};

class TableHeader extends React.Component {
  get headerToRender() {
    const {
      children,
      tableItems,
      showMissing,
    } = this.props;

    const childrenArray = React.Children.toArray(children);

    if (showMissing && tableItems === 1 && childrenArray.length === 1) {
      return childrenArray.concat([ <Col key={childrenArray.length} /> ]);
    }

    return childrenArray;
  }

  get offsetLayoutProps() {
    const {
      tableItems,
      showMissing,
    } = this.props;

    const classes = cx(
      styles['row-offset-header'],
      tableItems === 1 && styles['row-single-item-offset-header'],
      showMissing && tableItems === 1 && styles['row-single-item-offset-header-show']
    );

    if (tableItems === 1) {
      if (showMissing) {
        return {
          className: classes,
          smallCols: [ 12 ],
          mediumCols: [ 4 ]
        };
      }

      return {
        className: classes,
        smallCols: [ 12 ],
        mediumCols: [ 4, 8 ]
      };
    }

    return {
      className: classes,
      smallCols: [ 12, 6, 6 ],
      mediumCols: [ 4 ]
    };
  }

  render() {
    const {
      children, expandable, expanded, offset, tableItems, showMissing
    } = this.props;

    if (expandable && !expanded) {
      return (
        <Layout
          smallCols={[ 12 ]}
          mediumCols={[ 8, 4 ]}
        >
          {
            React.Children.map(children, (child, idx) => <Col key={idx} className={styles['header-expandable']}>{ child }</Col>)
          }
        </Layout>
      );
    }

    if (offset) {
      const layoutProps = this.offsetLayoutProps;

      return (
        <Layout
          {...layoutProps}
        >
          <Col className={styles['col-offset-header']} />

          {
            this.headerToRender.map((child, idx) => <Col key={idx} className={styles['col-offset-header-cells']}>{ child }</Col>)
          }
        </Layout>
      );
    }

    return (
      <TableRow
        {...this.props}
        header
      >
        { children }

        {
          showMissing && tableItems === 1 &&
          <Col />
        }
      </TableRow>
    );
  }
}

class TableRow extends React.Component {
  get childrenArray() {
    const { children } = this.props;

    return React.Children.toArray(children);
  }

  get colClass() {
    const { header } = this.props;

    const className = header ? 'col-header-cells' : 'cell';
    const addFloatingBorder = this.childrenArray.length === 3 && !header ? 'floating-border' : 'no-floating-border';

    return cx(
      styles[className],
      styles[addFloatingBorder],
    );
  }

  get rowClass() {
    const {
      header,
      tableItems,
      showMissing,
      highlightMissing,
      outlineMissing,
    } = this.props;

    return (
      cx(
        styles.row,
        tableItems === 1 && styles['row-single-item'],
        (tableItems === 1 && showMissing) && styles['row-single-item-show'],
        (tableItems === 1 && outlineMissing) && styles['row-single-item-outline'],
        (tableItems === 1 && highlightMissing) && styles['row-single-item-highlight'],
        header && styles['row-header']
      )
    );
  }

  get layoutProps() {
    const { tableItems, showMissing } = this.props;

    const className = this.rowClass;

    if (this.childrenArray.length === 2 && tableItems === 2) {
      return {
        className,
        smallCols: [ 12 ],
        mediumCols: [ 4, 8 ]
      };
    }

    if (tableItems === 1) {
      if (showMissing) {
        return {
          className,
          smallCols: [ 12 ],
          mediumCols: [ 4 ]
        };
      }

      return {
        className,
        smallCols: [ 12 ],
        mediumCols: [ 4, 8 ]
      };
    }

    return {
      className,
      smallCols: [ 12, 6, 6 ],
      mediumCols: [ 4 ]
    };
  }

  get childrenToRender() {
    const { tableItems, showMissing } = this.props;

    if (showMissing && tableItems === 1 && this.childrenArray.length === 2) {
      return this.childrenArray.concat([ <Col key={this.childrenArray.length} /> ]);
    }

    return this.childrenArray;
  }

  renderCol = (child, idx, colClass) => {
    const {
      tooltip,
      subHeader
    } = this.props;

    if (tooltip && idx === 0) {
      return (
        <Col key={idx} className={colClass}>
          {child}
          <Tooltip className={styles['tooltip']} tooltipIconSize={18}>{subHeader}</Tooltip>
        </Col>
      );
    }

    if (subHeader && idx === 0) {
      return (
        <Col key={idx} className={cx(colClass, styles['sub-header'])}>
          {child}
          <Spacer size={12} />
          <Text
            className={styles['sub-header-text']}
            font='b'
            type={10}
          >
            {subHeader}
          </Text>
        </Col>
      );
    }

    return <Col key={idx} className={colClass}>{ child }</Col>;
  }

  render() {
    const {
      subHeader,
    } = this.props;

    const { colClass } = this;

    return (
      <Layout
        {...this.layoutProps}
      >
        { this.childrenToRender.map((child, idx) => this.renderCol(child, idx, colClass)) }

        {
          subHeader && (
            <Col
              className={styles['sub-header-mobile']}
            >
              <Text
                size={10}
                font='b'
              >
                {subHeader}
              </Text>
            </Col>
          )
        }
      </Layout>
    );
  }
}

TableRow.propTypes = {
  children: PropTypes.node,

  /**
   * If true, adds tooltip.
  **/
  tooltip: PropTypes.bool,

  /**
   * Adds subheader text when tooltip prop is not present. If tooltip prop is present, this will be tooltip text.
  **/
  subHeader: PropTypes.string,

  /**
   * Adds styling to TableRow to make it a TableHeader
   */
  header: PropTypes.bool,

  tableItems: PropTypes.oneOf([
    1,
    2
  ]),

  /**
   * Displays a blank column space where data could go
   */
  showMissing: PropTypes.bool,

  /**
   * Displays dashed border for final column in row when 1 `tableItem` is present
   */
  outlineMissing: PropTypes.bool,

  /**
   * Displays dashed bottom border for final column in row when 1 `tableItem` is present
  */
  highlightMissing: PropTypes.bool,
};

ComparisonTable.propTypes = {

  /**
   * If true, allows for a header with an expand button. Must be used in conjunction with expanded.
   */
  expandable: PropTypes.bool,

  /**
   * Reference to expanded state. Must be passed in as prop with `expandable`. Used to decide which header to render.
   */
  expanded: PropTypes.bool,

  /**
   * Number of items to render in the table. This does not include any information you may want to include in the 'missing` column; for that purpose, please use `1`
   **/
  tableItems: PropTypes.oneOf([
    1,
    2
  ]),
};

ComparisonTable.defaultProps = {
  tableItems: 2,
};

TableHeader.propTypes = {

  /**
   * If true, allows for a header with an expand button. Must be used in conjunction with expanded.
   */
  expandable: PropTypes.bool,

  /**
   * Reference to expanded state. Must be passed in as prop with `expandable`. Used to decide which header to render.
   */
  expanded: PropTypes.bool,

  tableItems: PropTypes.oneOf([
    1,
    2,
  ]),

  /**
   * Offsets the header by one, rendering only 2 columns as opposed to 3
   */
  offset: PropTypes.bool,

  /**
   * Displays a blank column space where data could go
   */
  showMissing: PropTypes.bool,
};

TableHeader.defaultProps = {
  tableItems: 2,
};

export default {
  Table: ComparisonTable,
  Header: TableHeader,
  Row: TableRow,
};
