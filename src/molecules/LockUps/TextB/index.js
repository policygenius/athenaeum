import React from 'react';
import PropTypes from 'prop-types';
import Text from 'atoms/Text';
import { Div } from 'atoms/Elementals';

const TextB = (props) => {
  const { spacer, line1, line2, } = props;

  return (
    <Div spacer={spacer}>
      <Text size={5} font='a'>{line1}</Text>
      <Text size={8} font='b'>{line2}</Text>
    </Div>
  );
};


TextB.propTypes = {
  spacer: PropTypes.number,
  line1: PropTypes.node,
  line2: PropTypes.node,
};

export default TextB;
