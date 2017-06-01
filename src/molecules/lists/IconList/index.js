import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from 'atoms/Icon';
import TextComponent from 'atoms/TextComponent';
import styles from './icon_list.module.scss';

function IconList(props) {
  const {
    className,
    data,
  } = props;

  return (
    <ul className={classnames(styles['icon-list'], className)}>
      {
        data.map( (item, idx) =>
          <li
            className={styles['item']}
            key={`iconlist-item-${idx}`}
          >
            <Icon
              className={styles['icon']}
              icon={item.icon}
            />

            <TextComponent
              className={styles['text']}
              type={6}
              semibold
            >
              {item.text}
            </TextComponent>
          </li>
        )
      }
    </ul>
  );
}


IconList.propTypes = {
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,

  /**
   * List of items to map over to create list
   */
  data: PropTypes.arrayOf(PropTypes.shape({
    item: PropTypes.string,
    icon: PropTypes.string
  })).isRequired,
};


export default IconList;
