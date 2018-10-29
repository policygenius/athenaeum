import React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import isValid from 'date-fns/is_valid';
import inRange from 'lodash/inRange';
import omit from 'lodash/omit';
import get from 'lodash/get';

import ErrorMessage from 'atoms/ErrorMessage';
import Text from 'atoms/Text';
import TextField from 'molecules/formfields/TextField';

import { renderTooltip } from 'utils/fieldUtils';

import { LAST_DATE_MONTH } from './constants';
import styles from './date_field.module.scss';

class BaseDateField extends React.Component {
  constructor(props) {
    super(props);

    const date = this.createDate(props.input.value);

    if (isValid(date)) {
      this.state = {
        monthValue: date.getUTCMonth() + 1,
        dayValue: date.getUTCDate(),
        yearValue: date.getFullYear()
      };
    } else {
      this.state = {
        monthValue: '',
        dayValue: '',
        yearValue: ''
      };
    }
  }

  createDate = (date) => {
    /* New dates are in UTC time and default to midnight if not specified.
     * EST is behind UTC so it'll calculate the date as the previous date.
     * We need to offset that time correctly assign the date.
     * See https://stackoverflow.com/questions/45407072/javascript-dates-are-a-day-off
     */
    const utcDate = new Date(date);

    return new Date(utcDate.getTime() + (utcDate.getTimezoneOffset() * 60000));
  }

  changeFullDate = (prevState) => {
    const { input } = this.props;
    const { monthValue, dayValue, yearValue } = this.state;

    if (!dayValue || !monthValue || !yearValue) {
      return input.onChange(null);
    }

    if (
      prevState.dayValue === dayValue &&
      prevState.monthValue === monthValue &&
      prevState.yearValue === yearValue
    ) { return null; }

    if (String(yearValue).length < 4) {
      return input.onChange(null);
    }

    const date = new Date(Date.UTC(yearValue, monthValue - 1, dayValue));

    if (isValid(date)) {
      return input.onChange(date.toISOString());
    }

    return input.onChange(null);
  }

  changeShortDate = (prevState) => {
    const { input } = this.props;
    const { monthValue, yearValue } = this.state;
    const defaultDayOfMonth = 1;

    if (!monthValue || !yearValue) {
      return input.onChange(null);
    }

    if (prevState.monthValue === monthValue && prevState.yearValue === yearValue) {
      return null;
    }

    if (String(yearValue).length < 4) {
      return input.onChange(null);
    }

    const date = new Date(Date.UTC(yearValue, monthValue - 1, defaultDayOfMonth));

    if (isValid(date)) {
      return input.onChange(date.toISOString());
    }

    return input.onChange(null);
  }

  isValidMonthInput(monthValue) {
    const monthString = String(monthValue);


    return !monthString || inRange(+monthValue, 0, 13);
  }

  isValidDayInput(dayValue) {
    const dayString = String(dayValue);
    const maxDate = get(LAST_DATE_MONTH, `${Number(this.state.monthValue)}`, 32);

    return !dayString || inRange(+dayValue, 0, maxDate);
  }

  set month(monthValue) {
    const { input } = this.props;

    if (this.isValidMonthInput(monthValue)) {
      this.setState({ monthValue });
    } else if (this.isValidMonthInput(this.state.monthValue)) {
      this.setState({ monthValue: this.state.monthValue });
    } else {
      input.onChange(null);
    }
  }

  set day(dayValue) {
    const { input } = this.props;

    if (this.isValidDayInput(dayValue)) {
      this.setState({ dayValue });
    } else if (this.isValidDayInput(this.state.dayValue)) {
      this.setState({ dayValue: this.state.dayValue });
    } else {
      input.onChange(null);
    }
  }

  set year(yearValue) {
    const { input } = this.props;
    const yearString = String(yearValue);

    if (!yearString || +yearValue >= 1) {
      this.setState({ yearValue });
    } else {
      input.onChange(null);
    }
  }

  blurIfLeaving = () => {
    setTimeout(() => {
      const { input } = this.props;

      if (!findDOMNode(this.dateWrapper).contains(document.activeElement)) { // eslint-disable-line react/no-find-dom-node
        input.onBlur(input.value);
      }
    });
  };

  get monthField() {
    const { input: dateFieldInput } = this.props;

    return (props = { input: {} }) =>
      this.wrapChild(
        <TextField
          type='text'
          placeholder='mm'
          id={`${dateFieldInput.name}Month`}
          noBaseStyle
          input={{
            name: `${dateFieldInput.name}Month`,
            ref: (ref) => { this.monthInput = ref; },
            maxLength: 2,
            noValidate: true,
            onChange: (e) => {
              props.input.onChange && props.input.onChange(e);
              this.month = e.target.value;
            },
            onFocus: dateFieldInput.onFocus,
            onBlur: this.blurIfLeaving,
            pattern: '[0-9]*',
            value: this.state.monthValue,
            ...props.input,
          }}
          {...omit(props, 'input')}
        />
      )
    ;
  }

  get dayField() {
    const { input: dateFieldInput } = this.props;

    return (props = { input: {} }) =>
      this.wrapChild(
        <TextField
          type='text'
          placeholder='dd'
          id={`${dateFieldInput.name}Day`}
          noBaseStyle
          input={{
            name: `${dateFieldInput.name}Day`,
            ref: (ref) => { this.dayInput = ref; },
            maxLength: 2,
            noValidate: true,
            onChange: (e) => {
              props.input.onChange && props.input.onChange(e);
              this.day = e.target.value;
            },
            onFocus: dateFieldInput.onFocus,
            onBlur: this.blurIfLeaving,
            pattern: '[0-9]*',
            value: this.state.dayValue,
            ...props.input,
          }}
          {...omit(props, 'input')}
        />
      )
    ;
  }

  get yearField() {
    const { input: dateFieldInput } = this.props;

    return (props = { input: {} }) =>
      this.wrapChild(
        <TextField
          type='text'
          placeholder='yyyy'
          id={`${dateFieldInput.name}Year`}
          noBaseStyle
          input={{
            name: `${dateFieldInput.name}Year`,
            ref: (ref) => { this.yearInput = ref; },
            maxLength: 4,
            noValidate: true,
            onChange: (e) => {
              props.input.onChange && props.input.onChange(e);
              this.year = e.target.value;
            },
            onFocus: dateFieldInput.onFocus,
            onBlur: this.blurIfLeaving,
            pattern: '[0-9]*',
            value: this.state.yearValue,
            ...props.input,
          }}
          {...omit(props, 'input')}
        />
      )
    ;
  }

  get numberOfChildren() {
    const { children } = this.props;

    return React.Children.toArray(children).length;
  }

  get childClasses() {
    const { meta } = this.props;

    return classnames(...[
      styles['input'],
      styles[`fields-${this.numberOfChildren}`],
      meta && meta.active && styles['input-focused'],
    ]);
  }

  wrapChild = child =>
    <div
      className={this.childClasses}
    >
      {child}
    </div>
    ;

  wrapper = (children) => {
    const {
      className,
      input,
      label,
      meta,
      subLabel,
      fieldRef,
      tooltip,
    } = this.props;

    const showErrorMessage = !meta.active && (meta.visited || meta.submitFailed);

    const classes = [
      styles['date-field'],
      meta && meta.active && styles['focused'],
      meta && showErrorMessage && meta.error && !meta.active && styles['hasError'],
      className
    ];

    const message = meta && showErrorMessage && (meta.error || meta.warning);

    return (
      <div
        ref={(node) => {
          fieldRef && fieldRef(node);
          this.dateWrapper = node;
        }}
      >
        <div
          className={classnames(...classes)}
          onBlur={(e) => {
            if (!e.relatedTarget) input.onBlur();
          }}
          onFocus={input && input.onFocus}
        >
          <div className={styles['label-wrapper']}>
            <div className={styles['label']}>
              <label htmlFor='date'>{label}</label>
              { tooltip && renderTooltip(tooltip, styles['tooltip'], styles['tooltip-icon']) }
            </div>
            {
              subLabel &&
                <Text
                  size={10}
                  font='b'
                >
                  {subLabel}
                </Text>
            }
          </div>
          <div className={styles['line-1']}>
            { children }
          </div>
        </div>

        <ErrorMessage
          condition={!!message}
          message={message}
        />
      </div>
    );
  }

  render() {
    return null;
    // throw Error('Child element should have its own call to .render');
  }
}

BaseDateField.propTypes = {
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,
  /**
   * Label.
   */
  label: PropTypes.string,
  /**
   * Label text placed underneath label.
   */
  subLabel: PropTypes.string,
  /**
   * Meta object is passed from reduxForm
   */
  meta: PropTypes.object,
  /**
   * Input object is passed from reduxForm
   */
  input: PropTypes.object,
  /**
   * Any children passed to DateField
   */
  children: PropTypes.node,
  /**
   * Applies a React ref to the wrapping node for this field
   */
  fieldRef: PropTypes.func,
  /**
   * Adds a tooltip to the label. Provide string for text to be placed inside tooltip popup
   */
  tooltip: PropTypes.string,
};

export default BaseDateField;
