import kebabCase from 'lodash/kebabCase';
import assign from 'lodash/assign';

export function dataAttrName(key) {
  return `data-${kebabCase(key.toLowerCase())}`;
}

export function dataAttributes(data) {
  const exportAttr = (res, key) => {
    if (key === 'children') return res;

    const attr = { [dataAttrName(key)]: data[key] };

    return assign({}, res, attr);
  };

  return Object.keys(data).reduce(exportAttr, {});
}
