import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Layout, Col } from 'atoms/Layout';
import { Partial, separatePartials, partialRenderer } from 'helpers/Partial';
import CheckOutPartials from './CheckOutPartials';

import styles from './checkout.scss';

function CheckOut(props) {
  const {
    children,
    className,
    totalCost,
  } = props;

  const childPartials = separatePartials(children);
  const renderPartial = partialRenderer(CheckOutPartials);

  return (
    <div className={classnames(styles['checkout'], className)}>
      <Layout
        className={styles['checkout-layout']}
        fullwidth
      >
        <Col
          className={styles['head']}
          fullwidth
        >
          <Layout
            data-suckk={1992}
            className={styles['head-layout']}
            smallCols={[ 12 ]}
            mediumCols={[ 3, 6, 3 ]}
            fullwidth
          >
            { renderPartial('head-main', {}) }
            { renderPartial('head-body', totalCost) }
            { renderPartial('head-foot', {}) }
          </Layout>
        </Col>

        <Col
          className={styles['main']}
          fullwidth
        >
          <Layout
            className={styles['main-layout']}
            mediumCols={[ 7, 4 ]}
            fullwidth
          >
            { renderPartial('main-content', childPartials.Main) }
            { renderPartial('main-sidebar', childPartials.Sidebar) }
          </Layout>

          <div>Footer Placeholder</div>
        </Col>

      </Layout>
    </div>
  );
}

CheckOut.propTypes = {
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  totalCost: PropTypes.shape({
    /**
     * currency unit (i.e $)
     */
    curr: PropTypes.string,
    value: PropTypes.number,
    unit: PropTypes.string
  }).isRequired,
};

CheckOut.Sidebar = class Sidebar extends Partial {};

export default CheckOut;
