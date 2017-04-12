import React from 'react';
import styles from './add_card.module.scss';

function renderContent( props ) {
  const {
    children,
    beneficiary,
    jewelry,
  } = props;

  var txt, icon;

  if ( beneficiary ) {
    txt = 'Add Beneficiary';
    icon = 'plus';
  }

  if ( jewelry ) {
    txt = 'Add jewelry';
    icon = 'jewelry';
  }

  return (
    <div>
      <Icon
        icon={ icon }
        className={ styles.icon }
      />
      { txt }
    </div>
  )
}

function AddCard ( props ) {
  return (
    <div className={ styles.add }>
      { renderContent(props) }
    </div>
  )
}

export default AddCard;
