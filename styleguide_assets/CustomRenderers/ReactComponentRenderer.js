/* eslint-disable */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactComponentRenderer = ReactComponentRenderer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Link = require('rsg-components/Link');

var _Link2 = _interopRequireDefault(_Link);

var _Heading = require('rsg-components/Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _Styled = require('rsg-components/Styled');

var _Styled2 = _interopRequireDefault(_Styled);

const _classnames = require('classnames');

const style = require('../rcl_styles.module.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(_ref) {
  var font = _ref.font,
    monospace = _ref.monospace,
    light = _ref.light;
  return {
    root: {
      marginBottom: 50,
      fontSize: 16,
      '&:hover $isolatedLink': {
        isolate: false,
        opacity: 1
      }
    },
    header: {
      position: 'relative',
      marginBottom: 20
    },
    isolatedLink: {
      position: 'absolute',
      top: 0,
      right: 0,
      fontFamily: font,
      fontSize: 14,
      opacity: 0,
      transition: 'opacity ease-in-out .15s .2s'
    },
    primaryHeading: {
      position: 'relative',
      marginTop: 0,
      marginBottom: 7,
      fontFamily: font,
      fontSize: 36,
      fontWeight: 'normal'
    },
    heading: {
      margin: [[0, 0, 7]],
      fontFamily: font,
      fontSize: 20,
      fontWeight: 'normal'
    },
    pathLine: {
      fontFamily: monospace,
      color: light,
      fontSize: 14
    },
    description: {
      marginBottom: 20,
      fontSize: 16
    },
    subsection: {
      marginBottom: 30
    }
  };
};

function ReactComponentRenderer(_ref2) {
  var classes = _ref2.classes,
    name = _ref2.name,
    slug = _ref2.slug,
    pathLine = _ref2.pathLine,
    description = _ref2.description,
    props = _ref2.props,
    methods = _ref2.methods,
    examples = _ref2.examples,
    _ref2$isolated = _ref2.isolated,
    isolated = _ref2$isolated === undefined ? false : _ref2$isolated;

  return _react2.default.createElement(
    'div',
    { className: _classnames(classes.root, style['component-section']), id: name + '-container' },
    _react2.default.createElement(
      'div',
      { className: _classnames(style['component-wrapper']) },
      _react2.default.createElement(
        'header',
        { className: classes.header },
        _react2.default.createElement(
          _Heading2.default,
          { level: 2, className: classes.primaryHeading, slug: slug },
          name
        ),
        _react2.default.createElement(
          'div',
          { className: classes.pathLine },
          pathLine
        ),
        _react2.default.createElement(
          'div',
          { className: classes.isolatedLink },
          isolated ? _react2.default.createElement(
            _Link2.default,
            { href: '/' },
            '\u2190 Back'
          ) : _react2.default.createElement(
            _Link2.default,
            { href: '#!/' + name },
            'Open isolated \u21E2'
          )

        )
      ),
      _react2.default.createElement(
        'div',
        { className: classes.description },
        description
      ),
      props && _react2.default.createElement(
        'div',
        { className: classes.subsection },
        _react2.default.createElement(
          'h3',
          { className: classes.heading },
          'Props'
        ),
        props
      ),
      methods && _react2.default.createElement(
        'div',
        { className: classes.subsection },
        _react2.default.createElement(
          'h3',
          { className: classes.heading },
          'Methods'
        ),
        methods
      ),
      examples
    )
  );
}

ReactComponentRenderer.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  name: _propTypes2.default.string.isRequired,
  slug: _propTypes2.default.string.isRequired,
  pathLine: _propTypes2.default.string.isRequired,
  description: _propTypes2.default.node,
  props: _propTypes2.default.node,
  methods: _propTypes2.default.node,
  examples: _propTypes2.default.node,
  isolated: _propTypes2.default.bool
};

exports.default = (0, _Styled2.default)(styles)(ReactComponentRenderer);
/* eslint-enable */
