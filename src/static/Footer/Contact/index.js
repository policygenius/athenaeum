import React from 'react';
import PropTypes from 'prop-types';
import { generate } from 'shortid';
import {
  Icon,
  Text,
  Hide,
  Spacer,
  StyledWrapper,
} from 'athenaeum';

import { address, contactBottom, contactWrapper, header } from './styles';
import ContactItem from './ContactItem';

const Contact = (props) => {
  const { contactItems } = props;

  return (
    <StyledWrapper
      css={contactWrapper}
    >
      <StyledWrapper
        css={header}
        component={Icon}
        icon="pgLogoBlack"
      />
      <StyledWrapper
        css={address}
      >
        <Text type={10} font="b" align="left">
          22 West 19th St, Floor 8
        </Text>
        <Text type={10} font="b" align="left">
          New York, NY 10011
        </Text>
      </StyledWrapper>
      {
        contactItems.map(item =>
          (<ContactItem
            key={`contact-item-${generate()}`}
            item={item}
          />)
        )
      }
    </StyledWrapper>
  );
};

Contact.propTypes = {
  contactItems: PropTypes.array
};

export default Contact;
