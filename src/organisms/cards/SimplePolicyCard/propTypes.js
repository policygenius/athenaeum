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
   * The total number of customers for the carrier
   */
  totalCustomers: PropTypes.shape({
    value: PropTypes.number.isRequired,
    hoverMessage: PropTypes.node.isRequired
  }),
  /**
   * The insurance premium
   */
  premium: PropTypes.shape({
    price: PropTypes.number.isRequired,
    format: PropTypes.string.isRequired,
    defaultText: PropTypes.node,
  }),
  /**
   * Optional discount percentage
   */
  discount: PropTypes.node,
  /**
   * Optional array of nodes that will be spaced appropriately in the footer
   */
  footer: PropTypes.array,
  /**
   * Optional array of nodes that will be spaced appropriately in the header
   *
   * Only displayed on mobile
   */
  header: PropTypes.array,
  /**
   * Click handler for details button
   */
  onDetails: PropTypes.func,
  /**
   * Props for the Checkbox to compare
   *
   * NOTE: `name` must be unique
   */
  compareCheckbox: PropTypes.shape({
    onCompare: PropTypes.func.isRequired,
    compareSelected: PropTypes.bool,
    name: PropTypes.string,
  }),

  /**
   * Boolean to toggle styling for Continue CTA if any other card in the group is selected
   */
  anyCardSelected: PropTypes.bool,
};
