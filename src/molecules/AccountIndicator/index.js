import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Text from 'atoms/Text';
import Line from 'atoms/Line';
import Icon from 'atoms/Icon';
import LinkWrapper from 'atoms/LinkWrapper';

import styles from './account_indicator.module.scss';

const CHAR_LEN_FIRST_NAME = 19;
const CHAR_LEN_FULL_NAME = 29;
const CHAR_LEN_EMAIL = 40;

class AccountIndicator extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  truncate = (str, len) => {
    if (!str) return '';
    if (str.length <= len) return str;

    return `${str.substring(0, len)}...`;
  }

  getFirstName = (name) => {
    if (!name) {
      return null;
    }

    const [ first ] = name.split(' ');

    return first;
  }

  getIndicatorGreeting = (firstName) => {
    if (!firstName) {
      return '';
    }

    const truncFirstName = this.truncate(firstName, CHAR_LEN_FIRST_NAME);

    return `Hi, ${truncFirstName}`;
  }

  getIconInitial = (firstName, email) => {
    if (!firstName) return (email[0] || '').toUpperCase();

    return firstName[0];
  }

  handleIndicatorClick = () => {
    const { open } = this.state;

    this.setState({ open: !open });
  }

  handleXClick = () => {
    this.setState({ open: false });
  }

  get menuFullName() {
    const { customerName } = this.props;

    return this.truncate(customerName, CHAR_LEN_FULL_NAME);
  }

  get menuEmail() {
    const { customerEmail } = this.props;

    return this.truncate(customerEmail, CHAR_LEN_EMAIL);
  }

  get closeIcon() {
    return (
      <Icon
        icon='close'
        className={styles['close-icon']}
        onClick={this.handleXClick}
        renderSVGDOM
      />
    );
  }

  get circleInitial() {
    const { customerName, customerEmail, } = this.props;

    const firstName = this.getFirstName(customerName);
    const iconInitial = this.getIconInitial(firstName, customerEmail);

    return (
      <div className={styles['circle-initial']}>
        <Text size={8} font='a' color='primary-2'>{iconInitial}</Text>
      </div>
    );
  }

  get mobileIcon() {
    const { open } = this.state;

    return open ? this.closeIcon : this.circleInitial;
  }

  get greeting() {
    const { customerName, } = this.props;
    const firstName = this.getFirstName(customerName);
    const greeting = this.getIndicatorGreeting(firstName);

    return (
      <Text size={9} font='a' className={classnames(styles['greeting'])}>{greeting}</Text>
    );
  }

  trackClickedDashboardLink = () => {
    const { onMenuLinkClick } = this.props;

    onMenuLinkClick('dashboard');
  }

  trackClickedLogoutLink = () => {
    const { onMenuLinkClick } = this.props;

    onMenuLinkClick('logout');
  }

  render() {
    const { isAccountHolder, dashboardPath, logoutPath } = this.props;
    const { open } = this.state;

    if (!isAccountHolder) return null;

    return (
      <div className={classnames(styles['container'])}>
        <div onClick={this.handleIndicatorClick} className={classnames(styles['indicator'])}>

          <div className={styles['mobile-only']}>
            { this.mobileIcon }
          </div>

          <div className={styles['desktop-only']}>
            { this.circleInitial }
          </div>

          { this.greeting }
        </div>

        { open && (
          <div className={classnames(styles['menu'])}>
            <div className={classnames(styles['name-email'])}>
              <Text size={9} font='a'>{this.menuFullName}</Text>
              <Text size={12} font='b' color='neutral-2'>{this.menuEmail}</Text>
            </div>
            <Line spacer={0} />

            <ul className={styles['nav-link-container']}>
              <Text tag='li' size={10} font='b' className={styles['nav-link']}>
                <LinkWrapper onClick={this.trackClickedDashboardLink} href={dashboardPath}>
                  Dashboard
                </LinkWrapper>
              </Text>
              <Text tag='li' size={10} font='b' className={styles['nav-link']}>
                <LinkWrapper onClick={this.trackClickedLogoutLink} href={logoutPath}>
                  Logout
                </LinkWrapper>
              </Text>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

AccountIndicator.propTypes = {

  /**
   * isAccountHolder bool prop
   * This property toggles whether the indicator
   * is shown at all
   **/
  isAccountHolder: PropTypes.bool.isRequired,

  /**
   * Customer name prop
  **/
  customerName: PropTypes.string,

  /**
   * Customer email prop
  **/
  customerEmail: PropTypes.string,

  /**
   * Dashboard path prop
  **/
  dashboardPath: PropTypes.string,

  /**
   * Logout path prop
  **/
  logoutPath: PropTypes.string,

  /**
   * OnClick callback for tracking menu analytics
  **/
  onMenuLinkClick: PropTypes.func
};

export default AccountIndicator;
