import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Layout from 'atoms/Layout';
import Col from 'atoms/Layout/Col';
import Icon from 'atoms/Icon';
import TextComponent from 'atoms/TextComponent';
import styles from './text-lockups.module.scss';

function LogoTextLockup( props ) {
  return (
    <div>
      <TextComponent
        className={styles.header}
        type={6}
        light
      >
        { props.header }
      </TextComponent>

      <Icon
        className={classnames(styles['primary-icon'], styles.subheader)}
        icon={props.primaryIcon}
      />
    </div>
  );
}

function TextLockup( props ) {
  const {
    variant,
    children,
    header,
    subheader,
    primaryIcon,
    secondaryIcon,
    className
  } = props;

  switch ( variant ) {
      case 'A':
      case 'B':
        return (
          <div className={styles[variant]}>
            <TextComponent
              className={styles['header']}
              tag={'h4'}
              type={4}
            >
              { header }
            </TextComponent>

            <TextComponent
              className={styles['subheader']}
              tag={'h5'}
              type={6}
            >
              { subheader }
            </TextComponent>
          </div>
        );

      case 'C':
        return (
          <div className={styles[variant]}>
            <TextComponent
              type={5}
            >
              { header }
            </TextComponent>

            <TextComponent
              className={styles.subheader}
              type={6}
              light
            >
              { subheader }
            </TextComponent>
          </div>
        );

      case 'D':
      case 'E':
        return (
          <div className={styles[variant]}>
            <LogoTextLockup
              primaryIcon={primaryIcon}
              header={header}
            />
          </div>
        );

      case 'F':
        return (
          <div className={classnames(styles[variant], className)}>
            <Icon
              icon={secondaryIcon}
              className={styles['secondary-icon']}
            />
            <Layout className={styles['lockup-layout']}>
              <Col smallCols={10} className={styles['lockup-layout-col']}>
                <LogoTextLockup
                  primaryIcon={primaryIcon}
                  header={header}
                />
              </Col>
              <Col smallCols={2}>
                <Icon
                  className={styles['small-screen-icon']}
                  icon={secondaryIcon}
                />
              </Col>
            </Layout>
          </div>
        );

      case 'G':
        return (
          <div className={styles[variant]}>
            <TextComponent
              className={styles['header']}
              type={7}
              light
            >
              { header }
            </TextComponent>

            <TextComponent
              className={styles['subheader']}
              type={6}
            >
              { subheader }
            </TextComponent>
          </div>
        );

      default:
        return (
          <div className={styles[variant]}>
            { children }
          </div>
        );
  }
}

TextLockup.propTypes = {
  /**
   * Possible card variants are: `A`, `B`, `C`, `D`, `E`, `F`, `G`
   *
   */
  variant: PropTypes.string.isRequired,

  /**
   * header text displayed in lockup
   */
  header: PropTypes.string,

  /**
   * subheader text displayed in lockup
   */
  subheader: PropTypes.string,

  /**
   * primary icon for text lockup
   */
  primaryIcon: PropTypes.string,
  /**
   * secondary icon for text lockup
   */
  secondaryIcon: PropTypes.string,
  /**
   * supply an additional class name
   */
  className: PropTypes.string
};

LogoTextLockup.propTypes = {
  header: PropTypes.string,
  primaryIcon: PropTypes.string
};

export default TextLockup;
