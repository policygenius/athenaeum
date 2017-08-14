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
          >
          Life insurance is a financial safety net for your loved ones. <Text type={5} semibold>Compare plans today.</Text>
          </Text>
        );
      case 'health-insurance':
        return (
          <Text
            type={5}
          >
          Health insurance plans for <Text type={5} semibold>all coverage types</Text> (PPO, HMO, EPO, and POS).
        </Text>
        );
      case 'renters-insurance':
        return (
          <Text
            type={5}
          >
          Renters insurance for <Text type={5} semibold>{'apartment & home coverage'}</Text> in all 50 states.
        </Text>
        );
      case 'pet-insurance':
        return (
          <Text
            type={5}
          >
            <Text type={5} semibold>Pet insurance for cats and dogs.</Text> {'Providing both accidental & comprehensive options'}
          </Text>
        );
      case 'disability-insurance':
        return (
          <Text
            type={5}
          >
          Disability insurance to <Text type={5} semibold>protect your income</Text> from accidents and illness.
        </Text>
        );
      case 'auto-insurance':
        return (
          <Text
            type={5}
          >
          Car insurance that <Text type={5} semibold>protects you, your vehicle, and your family,</Text> available in all 50 states.
        </Text>
        );
      default:
        return (
          <Text
            type={5}
          >
            {"From protecting your home to saving money on prescriptions, we've got you covered."}
            <Spacer small />
            <Span
              typography={5}
              style={{
                fontStyle: 'italic'
              }}
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
