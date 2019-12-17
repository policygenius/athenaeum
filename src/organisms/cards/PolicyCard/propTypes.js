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
   * Total information to be displayed throughout the card
   */
  information: PropTypes.object.isRequired,

  /**
   * Value within the `information` object to display in the third section of the card
   *
   * All other values will be displayed in the fourth section of the card
   */
  mainInformationValue: PropTypes.string.isRequired,

  /**
   * The selection of values from the `information` object of which to display on mobile
   *
   * Any value not contained in this array will not be displayed on mobile
   */
  mobileInformationValues: PropTypes.arrayOf(PropTypes.string).isRequired,

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
    defaultText: PropTypes.string,
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
   * Click handler for continue button
   */
  onContinue: PropTypes.func.isRequired,

  /**
   * Click handler for details button
   */
  onDetails: PropTypes.func.isRequired,

  /**
   * Props for the Checkbox to compare
   *
   * NOTE: `name` must be unique
   */
  compareCheckbox: PropTypes.shape({
    onCompare: PropTypes.func.isRequired,
    compareSelected: PropTypes.bool,
    name: PropTypes.string,
  })
};
