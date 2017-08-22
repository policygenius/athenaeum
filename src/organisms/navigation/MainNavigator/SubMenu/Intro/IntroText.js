import React from 'react';
import PropTypes from 'prop-types';

import Text from 'atoms/Text';
import Spacer from 'atoms/Spacer';
import { Span } from 'atoms/Elementals';

function IntroText({ product }) {
  switch (product) {
      case 'life-insurance':
        return (
          <Text
            type={5}
            color='neutral-2'
          >
          Life insurance is a financial safety net for your loved ones. <Text type={5} semibold color='neutral-2'>Compare plans today.</Text>
          </Text>
        );
      case 'health-insurance':
        return (
          <Text
            type={5}
            color='neutral-2'
          >
          Health insurance plans for <Text type={5} semibold color='neutral-2'>all coverage types</Text> (PPO, HMO, EPO, and POS).
        </Text>
        );
      case 'renters-insurance':
        return (
          <Text
            type={5}
            color='neutral-2'
          >
          Renters insurance for <Text type={5} semibold color='neutral-2'>{'apartment & home coverage'}</Text> in all 50 states.
        </Text>
        );
      case 'pet-insurance':
        return (
          <Text
            type={5}
            color='neutral-2'
          >
            <Text type={5} semibold color='neutral-2'>Pet insurance for cats and dogs.</Text> {'Providing both accidental & comprehensive options'}
          </Text>
        );
      case 'disability-insurance':
        return (
          <Text
            type={5}
            color='neutral-2'
          >
          Disability insurance to <Text type={5} semibold color='neutral-2'>protect your income</Text> from accidents and illness.
        </Text>
        );
      case 'auto-insurance':
        return (
          <Text
            type={5}
            color='neutral-2'
          >
          Car insurance that <Text type={5} semibold color='neutral-2'>protects you, your vehicle, and your family,</Text> available in all 50 states.
        </Text>
        );
      default:
        return (
          <Text
            type={5}
            color='neutral-2'
          >
            {"From protecting your home to saving money on prescriptions, we've got you covered."}
            <Spacer small />
            <Span
              typography={5}
              style={{
                fontStyle: 'italic'
              }}
              color='neutral-2'
            >
            Not sure what you need?
          </Span>
          </Text>
        );
  }
}

IntroText.propTypes = {
  product: PropTypes.string,
};

export default IntroText;
