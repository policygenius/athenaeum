import React from 'react';
import PropTypes from 'prop-types';
import { generate } from 'shortid';
import {
  Button,
  Icon,
  Text,
  Hide,
  Spacer,
  StyledWrapper,
} from 'athenaeum';
import { contactItem, contactItemHeader } from '../styles';

const ContactItem = (props) => {
  const { item } = props;

  return (
    <StyledWrapper
      css={contactItem}
    >
      <Hide hideOn="medium large xLarge xxLarge">
        <Button variant="info" outline>{ item.header }</Button>
        <Spacer size={12} />
      </Hide>
      <Hide hideOn="small">
        <StyledWrapper
          css={contactItemHeader}
        >
          <Text type={8} font="a">
            <Icon
              icon={item.icon}
              height="24px"
              width="24px"
              inline="left"
              className="contact-icon"
            />
            { item.header }
          </Text>
        </StyledWrapper>
        <Spacer size={6} />
      </Hide>
      {
        item.text.map(text =>
          (<Text
            key={`contact-item-text-${generate()}`}
            font="b"
            type={10}
            className="contact-info"
          >
            { text }
          </Text>)
        )
      }
    </StyledWrapper>
  );
};

ContactItem.propTypes = {
  item: PropTypes.object
};

export default ContactItem;
