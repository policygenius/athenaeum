import React from 'react';
import PropTypes from 'prop-types';

import Text from 'atoms/Text';
import LinkWrapper from 'atoms/LinkWrapper';

import styles from './link_list.module.scss';

function LinkList(props) {
  const {
    item
  } = props;

  // probably need to remove based on the format from Contentful
  const list = item.items ? item.items : item.posts;

  return (
    <ul className={styles['main-list']}>
      <li>
        <Text
          type={7}
          font='a'
          semibold
        >
          {item.header}
        </Text>
      </li>
      <li>
        <ul className={styles['sub-list']}>
          {
            list.map(i =>
              <li>
                <LinkWrapper
                  href={i.url}
                  color='neutral-1'
                >
                  <Text
                    key={i.title}
                    type={10}
                    font='b'
                    inheritColor
                  >
                    {i.title}
                  </Text>
                </LinkWrapper>
              </li>
            )
          }
        </ul>
      </li>
    </ul>
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
