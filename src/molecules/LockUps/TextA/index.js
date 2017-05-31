import React from 'react';
import PropTypes from 'prop-types';
import { Div, P } from 'atoms/Elementals';

const TextA = (props) => {
  const { spacer, line1, line2, } = props;

  return (
    <Div spacer={spacer}>
      <P typography={4} color='neutral-2'>{line1}</P>
      <P typography={6} color='neutral-4'>{line2}</P>
    </Div>
  );
};


TextA.propTypes = {
  spacer: PropTypes.number,
  line1: PropTypes.node,
  line2: PropTypes.node,
};

export default TextA;
