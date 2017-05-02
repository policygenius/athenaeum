import React from 'react';

function wrapper(Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        value: '',
      };

      this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
      this.setState({
        value: event.target.value,
      });
    }

    render() {
      const newProps = {
        value: this.state.value,
        onChange: this.onChange,
      };

      return <Component {...this.props} {...newProps} />;
    }
  };
}

module.exports = wrapper;
