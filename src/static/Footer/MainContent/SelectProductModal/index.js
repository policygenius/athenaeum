import React from 'react';
import PropTypes from 'prop-types';

import Button from 'atoms/Button';
import SelectField from 'molecules/formfields/SelectField';
import Spacer from 'atoms/Spacer';
import Text from 'atoms/Text';
import Modal from 'molecules/Modal';

const selection = [
  {
    label: 'Life Insurance',
    value: '/life-insurance'
  },
  {
    label: 'Health Insurance',
    value: '/health-insurance'
  },
  {
    label: 'Long-term Disability Insurance',
    value: '/long-term-disability-insurance'
  },
  {
    label: 'Pet Insurance',
    value: '/pet-insurance'
  },
  {
    label: 'Renters Insurance',
    value: '/renters-insurance'
  },
  {
    label: 'Auto Insurance',
    value: '/auto-insurance'
  },
];

class SelectProductModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: 'life-insurance',
    };
  }

  handleSelect = (event) => {
    this.setState({
      product: event.target.value
    });
  }

  render() {
    const {
      modalProps
    } = this.props;

    return (
      <Modal
        contentLabel='Modal'
        {...modalProps}
      >
        <div>
          <Text size={6}>What insurance are you shopping for?</Text>
          <Spacer small />
          <SelectField
            placeholder='Select a Product'
            selectOptions={selection}
            input={{
              onChange: this.handleSelect
            }}
          />
          <Spacer small />
          <Button href={this.state.product}>
            Get Quotes
          </Button>
        </div>
      </Modal>
    );
  }
}

SelectProductModal.propTypes = {
  modalProps: PropTypes.object,
};

SelectProductModal.defaultProps = {
  // Place any default props here.
};

export default SelectProductModal;
