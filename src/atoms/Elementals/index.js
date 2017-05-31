import React from 'react';
import capitalize from 'lodash/capitalize';
import htmlTags from 'html-tag-names'; // eslint-disable-line
import Element from 'atoms/Element';

const merge = (props, newProps) => Object.assign({}, props, newProps);
const styled = tag => props => <Element {...merge(props, { tag })} />;
const stylize = component => props => <Element {...merge(props, { component })} />;

function HtmlElements() {
  const nodeElements = (res, htmlTag) => {
    const node = { [capitalize(htmlTag)]: styled(htmlTag) };

    return Object.assign({}, res, node);
  };

  return htmlTags.reduce(nodeElements, {});
}

// Dynamically computed values cannot be statically exported in es6.
const A = styled('A');
const Div = styled('div');
const Em = styled('em');
const H1 = styled('h1');
const H2 = styled('h2');
const H3 = styled('h3');
const H4 = styled('h4');
const H5 = styled('h5');
const H6 = styled('h6');
const Img = styled('img');
const P = styled('p');
const Pre = styled('pre');
const Span = styled('span');
const Strong = styled('strong');
const Small = styled('small');
const Sub = styled('sub');
const Sup = styled('sup');
const S = styled('s');
const B = styled('b');
const U = styled('U');
const Ul = styled('ul');
const Ol = styled('ol');
const Li = styled('li');

export {
  Element as default,
  HtmlElements,
  styled,
  stylize,
  Div, Img,
  H1, H2, H3, H4, H5, H6, A, P, S, B, U,
  Em, Pre, Span, Strong, Small, Sub, Sup,
  Ul, Ol, Li,
};
