import React from 'react';
import PropTypes from 'prop-types';
import styles from '../lists.module.scss';
import reduce from 'lodash/reduce';

function ArticleList ( props ) {
  const {
    data,
    type,
    mapProps,
  } = props;

  const defaultItemProps = [ 'id', 'link', 'imageSrc', 'header', 'subHeader' ];
  const itemProps = reduce(defaultItemProps, (res, val) => {
    res[val] = mapProps[val] || val;

    return res;
  }, {});

  return (
    <ul className={ styles[type] } >
      {data.map(item => {
        return (
          <li className={ styles.listItem } key={ item[itemProps.id] }>
            <a className={styles.link} href={ item[itemProps.link] }>
              <figure className={ styles.articleWrapper }>
                <img className={ [ styles.articleImg ] } src={ item[itemProps.imageSrc] } />

                <figcaption className={ styles.articleInfoWrapper }>
                  <h3 className={ styles.header }>{ item[itemProps.header] }</h3>
                  <p className={ styles.subHeader }>{ item[itemProps.subHeader] }</p>
                </figcaption>
              </figure>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

ArticleList.propTypes = {
  data: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  /**
   * Default keys are: id, link, imageSrc, header, subHeader
   */
  mapProps: PropTypes.object
};

ArticleList.defaultProps = {
  mapProps: {}
};

export default ArticleList;
