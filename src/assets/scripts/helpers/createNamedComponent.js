export const createNamedCompoenent = (overrideProps = {}) => {
  const component =  ( ownProps ) => {

    const props = Object.assign( {}, ownProps, overrideProps);
    const { type, children } = props;

    return (
      <div className={ styles[type] }>
        { children }
      </div>
    )
  }

  component.propTypes = {
    type: React.PropTypes.string.isRequired
  }

  component.defaultProps = {
    type: 'col'
  }

  return component;
}
