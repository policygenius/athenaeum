import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Col from 'atoms/Layout/Col';
import Button from 'atoms/Button';
import Text from 'atoms/Text';
import Spacer from 'atoms/Spacer';
import Layout from 'atoms/Layout';

import styles from './main-content.module.scss';
import Resource from './Resource';
import { resourcesList } from '../data/resources';
import { RESOURCES } from '../constants';

const SelectProduct = ({ className }) =>
  <Layout
    className={cx(styles['main-content'], className)}
    mediumCols={[ 6 ]}
    largeCols={[ 4, 5, 3 ]}
    nested
  >
    <Col className={styles['select-product-1']} >
      <Text type={7} font='a'>What kind of insurance are you looking for?</Text>
      <Spacer size={6} />
      <Text type={10} font='b' italic>Get your free quote</Text>
      <Spacer size={18} />
      <Button variant='info' outline unflex>SELECT A PRODUCT </Button>
    </Col>

    <Resource
      resources={resourcesList[RESOURCES.INSURANCE_GUIDES]}
    />

    <Resource
      resources={resourcesList[RESOURCES.GENIUS_CENTER]}
    />

    <Col className={styles['select-product-2']} >
      <Text type={7} font='a'>Want to receive weekly life hacks & personal finance advice?</Text>
      <Spacer size={18} />
      <Button variant='info' outline unflex>Get our newsletter</Button>
    </Col>

    <Resource
      resources={resourcesList[RESOURCES.HELPFUL_RESOURCES]}
    />

    <Resource
      className={styles['last-resource']}
      resources={resourcesList[RESOURCES.REVIEWS]}
    />
  </Layout>

  ;

SelectProduct.propTypes = {
  className: PropTypes.string
};

export default SelectProduct;
