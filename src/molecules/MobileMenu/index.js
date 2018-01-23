import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from 'atoms/Icon';
import Text from 'atoms/Text';
import styles from './mobile_menu.module.scss';

function MobileMenu(props) {
  const {
    className,
    tabs,
    onClick,
  } = props;

  const classes = [
    styles['tabs-wrapper'],
    className,
  ];

  return (
    <ul className={classnames(...classes)}>
      { tabs.map((tab, idx) =>
        (<li
          className={classnames(
            styles['tab'],
            tab.active && styles['active'],
            !tab.active && styles['inactive'],
          )}
          key={`tab-${idx}`}
          onClick={() => onClick(tab.key)}
        >
          <Icon
            className={classnames(
              tab.active && styles['icon-active'],
              !tab.active && styles['icon-inactive'],
            )}
            icon={tab.icon}
            width='20px'
            height='26px'
          />
          <Text
            className={styles['tag-text']}
            tag='span'
            type={7}
            color='primary-3'
            font='a'
          >
            {tab.text}
          </Text>
        </li>)
      )}
    </ul>
  );
}


MobileMenu.propTypes = {
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,
  /**
   * Tab data
   */
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      text: PropTypes.string,
      active: PropTypes.bool,
    })
  ).isRequired,
  /**
   * onClick handler for the tab
   */
  onClick: PropTypes.func.isRequired,
};

export default MobileMenu;
