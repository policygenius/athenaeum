import React from 'react';

import Col from 'atoms/Layout/Col';
import Button from 'atoms/Button';
import Text from 'atoms/Text';
import Spacer from 'atoms/Spacer';
import StyledWrapper from 'atoms/StyledWrapper';

import { selectProduct } from './styles';

const SelectProduct = () =>
  <StyledWrapper
    css={selectProduct}
  >
    <Col className='first-column' mediumCols={[ 6 ]} largeCols={[ 12 ]} >
      <Text type={7} font='a'>What kind of insurance are you looking for?</Text>
      <Spacer size={6} />
      <Text type={10} font='b' italic>Get your free quote</Text>
      <Spacer size={18} />
      <Button variant='info' outline unflex>SELECT A PRODUCT </Button>
    </Col>

    <Col mediumCols={[ 6 ]} largeCols={[ 12 ]} >
      <Text type={7} font='a'>Want to receive weekly life hacks & personal finance advice?</Text>
      <Spacer size={18} />
      <Button variant='info' outline unflex>Get our newsletter</Button>
    </Col>
  </StyledWrapper>

  ;

export default SelectProduct;
