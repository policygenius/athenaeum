/* eslint-disable react/no-danger */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import LinkWrapper from 'atoms/LinkWrapper';
import Text from 'atoms/Text';
import { Markdown } from 'react-showdown';
import styles from './accordion_panel.module.scss';

export default class AccordionPanel extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      open: props.open,
    };
  }

  handleClick() {
    this.props.onClick && this.props.onClick({ title: this.props.title, open: !this.state.open });
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    const {
      number,
      title,
      type,
      closeText,
      openText,
      disableNumberedList
    } = this.props;

    const sectionClasses = cx(styles['panel'], styles[type]);
    const contentClasses = cx({
      [styles['content']]: true,
      [styles['content-open']]: this.state.open
    });

    return (
      <section className={sectionClasses}>
        <header
          className={styles['header']}
          onClick={this.handleClick}
        >
          { !disableNumberedList &&
            <span className={styles['ordinal']}>
              {number}.
            </span>
          }
          <Text
            className={styles['title']}
          >
            {title}
          </Text>
          <span className={styles['toggleSwitch']}>
            <LinkWrapper type='secondary'>
              {this.state.open ? closeText : openText}
            </LinkWrapper>
          </span>
        </header>
        <section className={contentClasses}>
          <Markdown markup={this.props.body} />
        </section>
      </section>
    );
  }
}

AccordionPanel.propTypes = {
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,
  body: PropTypes.string,
  open: PropTypes.bool,
  title: PropTypes.string,
  openText: PropTypes.string,
  closeText: PropTypes.string,
  number: PropTypes.number,
  type: PropTypes.oneOf([ 'basic' ]),
  disableNumberedList: PropTypes.bool,
  onClick: PropTypes.func,
};

AccordionPanel.defaultProps = {
  type: 'basic',
};
