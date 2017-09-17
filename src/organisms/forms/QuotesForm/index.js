import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from 'atoms/Button';
import Spacer from 'atoms/Spacer';
import SelectField from 'molecules/formfields/SelectField';
import styles from './quotes_form.module.scss';

function QuotesForm(props) {
  const {
    children,
    className,
  } = props;

  const classes = [
    styles['quotes-form'],
    className,
  ];

  const selection = [
    { label: 'Option 1',
      value: 1 },
    { label: 'Option 2',
      value: 2 },
    { label: 'Option 3',
      value: 3 }
  ];

  return (
    <div className={classnames(...classes)}>
      <SelectField
        placeholder='Placeholder'
        label='Select Field'
        tooltip={"I'm a tooltip"}
        selectOptions={selection}
        meta={{ active: true }}
      />
      <Spacer small />
      <Button variant='action'>Get Quotes</Button>
    </div>
  );
}


QuotesForm.propTypes = {
  /**
   * This prop will add a new className to any inherent classNames
   * provided in the component's index.js file.
   */
  className: PropTypes.string,
};

QuotesForm.defaultProps = {
  // Place any default props here.
};

export default QuotesForm;
