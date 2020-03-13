import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from 'atoms/Icon';
import Text from 'atoms/Text';
import Tooltip from 'atoms/Tooltip';
import styles from './icon_list.module.scss';

function IconList(props) {
  const {
    className,
    data,
    font,
    type,
    itemSpacing
  } = props;

  return (
    <ul className={classnames(styles['icon-list'], className)}>
      {
        data.map( (item, idx) => (
          <li
            className={styles.item}
            key={`iconlist-item-${idx}`}
            style={{
              marginBottom: itemSpacing
            }}
          >
            <Text
              className={styles.text}
              type={type}
              font={font}
            >
              <Icon
                className={styles.icon}
                icon={item.icon}
                lazy={typeof item.lazy === 'undefined' ? true : item.lazy}
                inline
              />
              {item.text}
              {
                item.tooltip ? (
                  <Tooltip
                    className={styles.tooltip}
                    left
                    inline
                  >
                    {item.tooltip}
                  </Tooltip>
                ) : ''
              }
            </Text>
            <Text>
              {item.description}
            </Text>
          </li>
        ))
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
   * Text type prop -- see [Text](#text) for appropriate values
   */
  type: PropTypes.number,

  /**
   * Font type prop -- see [Text](#text) for appropriate values
   */
  font: PropTypes.string,

  /**
   * Sets the spacing between list items. Will default to 12px.
   */
  itemSpacing: PropTypes.string,

  /**
   * List of items to map over to create list
   */
  data: PropTypes.arrayOf(PropTypes.shape({
    item: PropTypes.string,
    icon: PropTypes.string,
    lazy: PropTypes.bool,
  })).isRequired,
};

IconList.defaultProps = {
  font: 'a',
  type: 8
};

export default IconList;
