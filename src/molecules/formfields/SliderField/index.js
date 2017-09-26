import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Slider from 'rc-slider/lib/Slider';
import indexOf from 'lodash/indexOf';
import styles from './slider_field.module.scss';

class SliderField extends Component {
  constructor() {
    super();

    this.state = {
      sliderIndex: 0,
    };
  }

  componentDidMount() {
    this.updateSlider(this.props.input.value);
  }

  componentWillReceiveProps(newProps) {
    this.updateSlider(newProps.input.value);
  }

  onChange = (value) => {
    const {
      input,
      sliderValues,
    } = this.props;

    this.setState({ sliderIndex: value }, () => {
      const sliderAmount = sliderValues[this.state.sliderIndex];

      return input.onChange(sliderAmount);
    });
  }

  findClosestAmount(values, value) {
    return values.reduce((prev, curr) =>
      Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
    );
  }

  updateSlider = (value) => {
    const { sliderValues } = this.props;

    const sliderIndex = indexOf(
      sliderValues,
      this.findClosestAmount(sliderValues, value)
    );

    this.setState({
      sliderIndex
    });
  }

  render() {
    const {
      className,
      sliderValues,
    } = this.props;

    const classes = [
      styles['slider-field'],
      className,
    ];

    return (
      <div className={classnames(...classes)}>
        <Slider
          min={0}
          max={sliderValues.length - 1}
          value={this.state.sliderIndex}
          onChange={value => this.onChange(value)}
        />
      </div>
    );
  }
}


SliderField.propTypes = {
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,

  /**
   * object that contains `value` and `onChange` callback for Redux Form usage
   */
  input: PropTypes.shape({
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    onChange: PropTypes.func,
  }).isRequired,

  /**
   * array of values that the SliderField will traverse
   */
  sliderValues: PropTypes.array.isRequired,
};

export default SliderField;
