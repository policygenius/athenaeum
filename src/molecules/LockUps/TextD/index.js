import React from 'react';
import PropTypes from 'prop-types';
import { Div, P } from 'atoms/Elementals';

const TextD = (props) => {
  const { spacer, line1, line2, } = props;

  return (
    <Div spacer={spacer}>
      <P spacer={1} typography={7} color='neutral-3'>{line1}</P>
      <P>{line2}</P>
    </Div>
  );
};

TextD.propTypes = {
  spacer: PropTypes.number,
  line1: PropTypes.node,
  line2: PropTypes.node,
};

TextD.defaultProps = {
  spacer: 2,
};

export default TextD;
