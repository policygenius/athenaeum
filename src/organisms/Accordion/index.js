import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './accordion.module.scss';
import AccordionPanel from './AccordionPanel';

const sections = ({ onClick, panels, openText, closeText, disableNumberedList }) =>
  panels.map((panel, i) =>
    <AccordionPanel
      onClick={onClick}
      openText={openText}
      closeText={closeText}
      key={i}
      open={i === 0}
      number={i + 1}
      disableNumberedList={disableNumberedList}
      {...panel}
    />
  );

function Accordion(props) {
  const {
    onClick,
    openText,
    closeText,
    panels,
    className,
    disableNumberedList,
    } = props;

  const classes = cx(
    className,
    styles['accordion'],
  );

  if (!panels) return null;

  return (
    <section className={classes}>
      {sections({
        onClick,
        panels,
        openText,
        closeText,
        disableNumberedList
      })}
    </section>
  );
}

Accordion.propTypes = {
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,
  /**
   * The text used for the link that will collapse an open accordion section
   * Defaults to 'Close'.
   */
  closeText: PropTypes.string,
  /**
   * The text used for the link that will open up the accordion section
   * Defaults to 'View'.
   */
  openText: PropTypes.string,
  /**
   * Panels: An array of objects that will blossom to become
   * our accordion sections. Requires a `title` and `body`.
   */
  panels: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired
    })
  ),
  /**
   * Whether or not to number the accordion items. Defaults to `true`.
   */
  disableNumberedList: PropTypes.bool,
  /**
   * Use this prop to tack on any extra click functionality.
   */
  onClick: PropTypes.func,
};

Accordion.defaultProps = {
  openText: 'View',
  closeText: 'Close',
  disableNumberedList: false
};

export default Accordion;
