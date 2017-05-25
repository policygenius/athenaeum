import React from 'react';
import PropTypes from 'prop-types';
import { Div, P } from 'atoms/Elementals';

const LogoTextA = (props) => {
  const { spacer, line1, logo, } = props;

  return (
    <Div spacer={spacer}>
      <P spacer={1} typography={6} color='neutral-4'>{line1}</P>
      { logo }
    </Div>
  );
};


LogoTextA.propTypes = {
  spacer: PropTypes.number,
  line1: PropTypes.node,
  logo: PropTypes.node,
};

export default LogoTextA;
