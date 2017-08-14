import React from 'react';
import PropTypes from 'prop-types';

import Text from 'atoms/Text';
import LinkWrapper from 'atoms/LinkWrapper';

import styles from './main_nav_submenu_list.module.scss';

function SubMenuList(props) {
  const {
    header,
    listItems,
  } = props;

  return (
    <li className={styles['wrapper']}>
      <Text
        tag='h3'
        type={6}
        color='neutral-2'
        className={styles['header']}
      >
        { header }
      </Text>
      <ul className={styles['list']}>
        {
          listItems.map((item, idx) =>
            <li
              key={`${item.title}-${idx}`}
              className={styles['list-item']}
            >
              <LinkWrapper
                alt='PolicyGenius'
                data-behavior='TrackAnalyticsOnClick'
                data-analytics-event-data={`{&quot;name&quot;:&quot;Used main nav&quot;,&quot;properties&quot;:{&quot;navigateTo&quot;:&quot;${item.href}&quot;,&quot;navigateFrom&quot;:&quot;/templates/main_nav&quot;,&quot;clickedFrom&quot;:&quot;mega menu&quot;}}`}
                href={item.href}
                className={styles['link']}
                variant='no-text-decoration'
                color='neutral-2'
              >
                { item.title }
              </LinkWrapper>
            </li>
          )
        }
      </ul>
    </li>
  );
}

SubMenuList.propTypes = {
  header: PropTypes.string,
  listItems: PropTypes.array,
};

export default SubMenuList;
