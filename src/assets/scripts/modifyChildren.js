function modifyChildren(child) {

  const className = classnames(
    styles[child.props.klass]
  )

  const props = {
    className
  };

  return React.cloneElement(child, props);
}
