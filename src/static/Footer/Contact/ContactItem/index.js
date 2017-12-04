import React from 'react';
import PropTypes from 'prop-types';
import { generate } from 'shortid';

import Button from 'atoms/Button';
import Icon from 'atoms/Icon';
import Text from 'atoms/Text';
import Hide from 'wrappers/Hide';
import Spacer from 'atoms/Spacer';
import LinkWrapper from 'atoms/LinkWrapper';
import StyledWrapper from 'atoms/StyledWrapper';

import { contactItem, contactItemHeader } from '../styles';

const openChat = () => {
  if (window.$zopim) {
    return window.$zopim.livechat.window.show();
  }

  /* eslint-disable no-console */
  return console.warn('Zopim chat not loaded.');
  /* eslint-enable no-console */
};

const ContactItem = (props) => {
  const { item } = props;

  return (
    <StyledWrapper
      css={contactItem}
    >
      <Hide hideOn='medium large xLarge xxLarge'>
        <Button variant='info' outline>{ item.header }</Button>
        <Spacer size={12} />
      </Hide>
      <Hide hideOn='small'>
        <StyledWrapper
          css={contactItemHeader}
          component={LinkWrapper}
          href={item.href}
          onClick={() => openChat()}
        >
          <Text type={8} font='a' inheritColor>
            <Icon
              icon={item.icon}
              height='24px'
              width='24px'
              inline='left'
              className='contact-icon'
            />
            { item.header }
          </Text>
        </StyledWrapper>
        <Spacer size={6} />
      </Hide>
      <Text
        key={`contact-item-text-${generate()}`}
        font='b'
        type={10}
        className='contact-info'
        dangerouslySetInnerHTML={{
          __html: item.text
        }}
      />
    </StyledWrapper>
  );
};

ContactItem.propTypes = {
  item: PropTypes.object
};

export default ContactItem;
