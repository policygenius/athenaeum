import React, { Component } from 'react';
import SelectField from 'molecules/formfields/SelectField';

const defaultSelectOptions = [
  { label: 'Option 1',
    value: 1 },
  { label: 'Option 2',
    value: 2 },
  { label: 'Option 3',
    value: 3 }
];

/* eslint-disable */

export default class SelectFieldExample extends Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange( event ) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <SelectField
        selectOptions={ this.props.selectOptions || defaultSelectOptions }
        input={{
          onChange: this.onChange,
          value: this.state.value
        }}
        {...this.props}
      />
    );
  }
}

