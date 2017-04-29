/* eslint-disable */

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.ComponentsListRenderer = ComponentsListRenderer;

const _react = require('react');
const PropTypes = require('prop-types');

const _react2 = _interopRequireDefault(_react);

const _classnames = require('classnames');

const _classnames2 = _interopRequireDefault(_classnames);

const _Link = require('rsg-components/Link');

const _Link2 = _interopRequireDefault(_Link);

const _Styled = require('rsg-components/Styled');

const _Styled2 = _interopRequireDefault(_Styled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) {
  if (key in obj) { Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; }

  return obj;
}

const styles = function styles(_ref) {
  let font = _ref.font,
    small = _ref.small;


  return {
    list: {
      margin: 0,
      paddingLeft: 15
    },
    item: {
      display: 'block',
      margin: [ [ 7, 0, 7, 0 ] ],
      fontFamily: font,
      fontSize: 15,
      listStyle: 'none',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    isChild: _defineProperty({}, small, {
      display: 'inline-block',
      margin: [ [ 0, 7, 0, 0 ] ]
    }),
    heading: {
      marginTop: 7,
      fontFamily: font,
      fontWeight: 'bold'
    }
  };
};

function ComponentsListRenderer(_ref2) {
  let classes = _ref2.classes,
    items = _ref2.items;

  items = items.filter(function (item) {
    return item.name;
  });

  if (!items.length) {
    return null;
  }

  return _react2.default.createElement(
    'ul',
    { className: classes.list },
    items.map(function (_ref3) {
      let heading = _ref3.heading,
        name = _ref3.name,
        slug = _ref3.slug,
        content = _ref3.content;


      return _react2.default.createElement(
        'li',
        { className: (0, _classnames2.default)(classes.item, (!content || !content.props.items.length) && classes.isChild), key: name },
        _react2.default.createElement(
          _Link2.default,
          { className: (0, _classnames2.default)(heading && classes.heading), href: `#${slug}` },
          name
        ),
        content
      );
    })
  );
}

ComponentsListRenderer.propTypes = {
  items: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired
};

exports.default = (0, _Styled2.default)(styles)(ComponentsListRenderer);

/* eslint-enable */
