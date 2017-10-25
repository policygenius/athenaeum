import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
  Text,
  LinkWrapper,
  StyledWrapper,
} from 'athenaeum';
import { generate } from 'shortid';

import { mainList } from './styles';

function LinkList(props) {
  const {
    item
  } = props;

  // probably need to remove based on the format from Contentful
  const list = item.items ? item.items : item.posts;

  return (
    <StyledWrapper
      css={mainList}
      component={List}
      bottomSpacing={12}
      noPadding
    >
      <Text
        type={7}
        font="a"
        semibold
      >
        {item.header}
      </Text>
      <List
        bottomSpacing={12}
        noPadding
        linkList
      >
        {
          list.map((i, id) =>
            (<LinkWrapper
              href={i.url}
              color="neutral-1"
            >
              <Text
                key={generate()}
                type={10}
                font="b"
              >
                {i.title}
              </Text>
            </LinkWrapper>)
          )
        }
      </List>
    </StyledWrapper>
  );
}

LinkList.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
    header: PropTypes.string,
  }),
};

export default LinkList;
