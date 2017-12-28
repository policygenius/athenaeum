import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Layout from 'atoms/Layout';
import StyledWrapper from 'atoms/StyledWrapper';
import Col from 'atoms/Layout/Col';
import colors from 'atoms/Color/colors.scss';

import styles from './gray-box.module.scss';

const GrayBox = ({
  cols,
  variant,
  colorDash,
  children,
  verticalPadding,
  leftOffset
}) => {
  const classes = cx(
    styles['gray-box'],
    styles[`gray-box-lg-${cols}`],
    variant && styles[variant],
    colorDash && colors[`color-dash-${colorDash}`],
    leftOffset && styles[`offset-${leftOffset}`]
  );

  const styleOverrides = ({ breakpoints }) => {
    let str = '';

    if (verticalPadding) {
      str += `
        padding-top: ${verticalPadding};
        padding-bottom: ${verticalPadding};
      `;
    }

    if (leftOffset) {
      str += `
      @media ${breakpoints.mediumUp} {
        margin-left: ${(100 / 12) * leftOffset}% !important;
        max-width: ${100 - ((100 / 12) * (cols - leftOffset))}% !important;
      }
      `;
    }

    return str;
  };

  return (
    <Layout
      mediumCols={[ cols - 1 ]}
      className={classes}
    >
      <StyledWrapper css={styleOverrides} component={Col} fullwidth>
        {children}
      </StyledWrapper>
    </Layout>
  );
};

GrayBox.propTypes = {
  supertitle: PropTypes.string,
  title: PropTypes.string,
  cols: PropTypes.number,
  variant: PropTypes.string,
  colorDash: PropTypes.string,
  children: PropTypes.node,
  verticalPadding: PropTypes.string,
  leftOffset: PropTypes.number
};

export default GrayBox;
