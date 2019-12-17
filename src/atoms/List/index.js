import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './list.module.scss';

const ignoredTypes = [ 'li', 'ul', 'ol', List ];

const renderList = (item, idx) => {
  if (ignoredTypes.indexOf(item.type) > -1) {
    return React.cloneElement(
      item,
      {
        key: `list-item-${idx}`
      }
    );
  }

  return <li key={`list-item-${idx}`} className={styles['list-item']}>{item}</li>;
};

function List(props) {
  const {
    children,
    className,
    columns,
    condensed,
    mini,
    noBullets,
    listItems,
    numberedList,
    horizontal,
    bottomSpacing,
    noPadding,
    linkList
  } = props;

  return React.createElement(
    numberedList ? 'ol' : 'ul',
    {
      className: classnames(
        styles['list'],
        condensed && styles['condensed'],
        mini && styles['mini'],
        noBullets && styles['no-bullets'],
        horizontal && styles['horizontal'],
        horizontal && horizontal.spaceBetween && styles[`horizontal-space-${horizontal.spaceBetween}`],
        bottomSpacing && styles[`bottom-spacing-${bottomSpacing}`],
        noPadding && styles['no-padding'],
        linkList && styles['link-list'],
        className
      ),
      style: {
        columns: `${columns} auto`
      }
    },
    children && React.Children.map(children, renderList),
    listItems && listItems.map(renderList)
  );
}

List.propTypes = {

  /*
   * The number of list columns
   */
  columns: PropTypes.number,

  /*
   * Condensed variant
   */
  condensed: PropTypes.bool,

  /*
   * Mini variant
   */
  mini: PropTypes.bool,

  /*
   * Variant without list bullets
   */
  noBullets: PropTypes.bool,

  /*
   * Creates a numbered list
   */
  numberedList: PropTypes.bool,

  /**
   * Items you want to pass into the list.
   * Note that this list will be appended to any children.
   */
  listItems: PropTypes.arrayOf(PropTypes.node),

  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,

  /**
   * Makes the list horizontal and adds additional props
   */
  horizontal: PropTypes.shape({
    spaceBetween: PropTypes.oneOf([ 6, 12, 18, 24, 36 ]),
  }),

  /**
   * Adds bottomSpacing to each child `li`. See `Spacer` for size details
   */
  bottomSpacing: PropTypes.oneOf([ 6, 12, 13, 16, 18, 24, 36, 60, 84, 120, 162 ]),

  /**
   * Removes 1rem left padding on `ul` or `ol`
   */
  noPadding: PropTypes.bool,

  /**
   * Adds hover effect to all children `a` tags within `li` element
   */
  linkList: PropTypes.bool,
};

List.defaultProps = {

  // Place any default props here.
};

export default List;
