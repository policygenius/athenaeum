import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Col } from 'atoms/Layout';
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
    styles['mobile-menu'],
    className,
  ];

  return (
    <div className={classnames(...classes)}>
      <div className={styles['tabs-wrapper']}>
        { tabs.map((tab, idx) =>
          <Col
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
              type={5}
              color={tab.active ? 'neutral-2' : 'neutral-3'}
              weight='semibold'
            >
              {tab.text}
            </Text>
          </Col>
        )}
      </div>
    </div>
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
