import React from 'react';
import {
  Layout,
  Col,
  Button,
  Text,
  Hide,
  Spacer,
  StyledWrapper,
  List,
} from 'athenaeum';

import { selectProduct } from './styles';

const SelectProduct = () => (
  <StyledWrapper
    css={selectProduct}
  >
    <Col className="column" mediumCols={[6]} largeCols={[12]} >
      <Text type={7} font="a">What kind of insurance are you looking for?</Text>
      <Spacer size={6} />
      <Text type={10} font="b" italic>Get your free quote</Text>
      <Spacer size={18} />
      <Button variant="info" outline unflex>SELECT A PRODUCT </Button>
    </Col>

    <Col className="column" mediumCols={[6]} largeCols={[12]} >
      <Text type={7} font="a">Want to receive weekly life hacks & personal finance advice?</Text>
      <Spacer size={18} />
      <Button variant="info" outline unflex>Get our newsletter</Button>
    </Col>
  </StyledWrapper>
  );

export default SelectProduct;
