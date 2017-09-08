import PropTypes from 'prop-types';

export default {
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,
  /**
   * The insurance carrier logo node
   */
  carrierLogo: PropTypes.node.isRequired,
  /**
   * The type of policy
   */
  policyType: PropTypes.string.isRequired,
  /**
   * More information about the policy
   */
  policyTooltip: PropTypes.node.isRequired,
  /**
   * The financial strength of the carrier
   */
  financialStrength: PropTypes.string.isRequired,
  /**
   * The customer service rating of the carrier
   */
  customerService: PropTypes.string.isRequired,
  /**
   * The total number of customers for the carrier
   */
  totalCustomers: PropTypes.number.isRequired,
  /**
   * The insurance carrier logo
   */
  monthlyPremium: PropTypes.number.isRequired,
  /**
   * Optional discount percentage
   */
  discount: PropTypes.node,
  /**
   * Optional array of nodes that will be spaced appropriately in the footer
   */
  footer: PropTypes.array,
  /**
   * Click handler for continue button
   */
  onContinue: PropTypes.func.isRequired,
  /**
   * Click handler for details button
   */
  onDetails: PropTypes.func.isRequired,
  /**
   * Click handler for the compare checkbox/ button
   */
  onCompare: PropTypes.func.isRequired,
  /**
   * Whether or not the compare checkbox is selected
   */
  compareSelected: PropTypes.bool,
};
