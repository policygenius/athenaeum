import React from 'react';
import PropTypes from 'prop-types';
import { Div, P } from 'atoms/Elementals';

const TextC = (props) => {
  const { spacer, line1, line2, } = props;

  return (
    <Div spacer={spacer}>
      <P typography={5} weight='semibold'>{line1}</P>
      <P typography={6} weight='light'>{line2}</P>
    </Div>
  );
};

TextC.propTypes = {
  spacer: PropTypes.number,
  line1: PropTypes.node,
  line2: PropTypes.node,
};

export default TextC;
