import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Layout, Col } from 'atoms/Layout';
import styles from './agent_callout.module.scss';

function AgentCallout(props) {
  const {
    imgSrc,
    contactLabel,
    contactValue,
    caseLabel,
    caseValue,
    className
  } = props;

  return (
    <Layout
      className={classnames(styles['agent-callout'], className)}
      mediumCols={[ 3, 9 ]}
      smallCols={[ 4, 8 ]}
    >
      <Col>
        <img className={styles['image']} src={imgSrc} alt={contactLabel} />
      </Col>

      <Col className={styles['contact-info']}>
        <Layout
          mediumCols={[ 7, 5 ]}
        >
          <Col className={styles['contact-item']}>
            <div className={styles['label']}>{contactLabel}</div>
            <div className={styles['value']}>{contactValue}</div>
          </Col>

          { caseLabel && caseValue &&
            <Col className={styles['contact-item']}>
              <div className={styles['label']}>{caseLabel}</div>
              <div className={styles['value']}>{caseValue}</div>
            </Col>
          }
        </Layout>
      </Col>
    </Layout>
  );
}

AgentCallout.propTypes = {
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,
  /**
   * Image src
   */
  imgSrc: PropTypes.string.isRequired,
  /**
   * Contact label
   */
  contactLabel: PropTypes.string,
  /**
   * Contact method value
   */
  contactValue: PropTypes.string,
  /**
   * Case reference label
   */
  caseLabel: PropTypes.string,
  /**
   * Case reference value
   */
  caseValue: PropTypes.string
};

export default AgentCallout;
