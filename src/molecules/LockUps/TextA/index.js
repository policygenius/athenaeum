import React from 'react';
import PropTypes from 'prop-types';
import { Div } from 'atoms/Elementals';
import Text from 'atoms/Text';

const TextA = (props) => {
  const { spacer, line1, line2, } = props;

  return (
    <Div spacer={spacer}>
      <Text size={4} a> {line1} </Text>
      <Text size={6}> {line2} </Text>
    </Div>
  );
};


TextA.propTypes = {
  spacer: PropTypes.number,
  line1: PropTypes.node,
  line2: PropTypes.node,
};

export default TextA;
