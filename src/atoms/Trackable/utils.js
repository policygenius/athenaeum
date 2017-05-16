import kebabCase from 'lodash/kebabCase';

export function dataAttrName(key) {
  return `data-${kebabCase(key.toLowerCase())}`;
}

export function dataAttributes(data) {
  const exportAttr = (res, key) => {
    if (key === 'children') return res;

    const attr = { [dataAttrName(key)]: data[key] };

    return Object.assign({}, res, attr);
  };

  return Object.keys(data).reduce(exportAttr, {});
}
