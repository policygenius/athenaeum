import React from 'react';
import Button from '../../components/buttons/Button';
import styles from './cards.module.scss';
import classnames from 'classnames';

function modifyChildren(child) {

  const className = classnames(
    styles[child.props.klass]
  )

  const props = {
    className
  };

  return React.cloneElement(child, props);
}



function Card ( props ) {

  const { type } = props;

  switch ( type ) {
    case 'add':
      return (
        <div className={ styles[type] }>+ Add Beneficiary</div>
      )
    case 'beneficiary':
      const {
        header1,
        subheader1,
        percent,
        subheader2,
        footerText1,
        footerText2 } = props;

      return (
        <div className={ styles[type] }>
          <span className={ styles['close'] }></span>
          <div className={ styles['col'] }>
            <h4>{ header1 }</h4>
            <h5>{ subheader1 }</h5>
          </div>
          <div className={ styles['col'] }>
            <span>{ percent }</span>
            <h5>{ subheader2 }</h5>
          </div>
          <div>
            <Button>Imported Button</Button>
          </div>
          <footer>
            <span>{ footerText1 }</span>
            <span>{ footerText2 }</span>
          </footer>
        </div>
      )
    default:
      console.log( 'Classname:', styles.test );


      console.log( 'Children:', children );

      return (
        <div className={ styles[type] }>
          {React.Children.map(children, child => modifyChildren(child))}
        </div>
      )
  }
}

Card.propTypes = {
  /**
   * Possible card types are: `add`
   *
   */
  type: React.PropTypes.string.isRequired
}

Card.defaultProps = {
  type: 'add'
}

export default Card;
