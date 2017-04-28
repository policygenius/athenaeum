/* eslint-disable */

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.StyleGuideRenderer = StyleGuideRenderer;

const _react = require('react');
const React = require('react');
const PropTypes = require('prop-types');

const _react2 = _interopRequireDefault(_react);

const _Logo = require('rsg-components/Logo');

const _Logo2 = _interopRequireDefault(_Logo);

const _Markdown = require('rsg-components/Markdown');

const _Markdown2 = _interopRequireDefault(_Markdown);

const _Styled = require('rsg-components/Styled');

const _Styled2 = _interopRequireDefault(_Styled);

const _classnames = require('classnames');

const _classnames2 = _interopRequireDefault(_classnames);

const style = require('../rcl_styles.module.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) {
  if (key in obj) { Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; }

  return obj;
}

const styles = function styles(_ref) {
  let _content;

  let font = _ref.font,
    base = _ref.base,
    light = _ref.light,
    border = _ref.border,
    baseBackground = _ref.baseBackground,
    codeBackground = _ref.codeBackground,
    small = _ref.small;


  return {
    root: {
      color: base,
      backgroundColor: baseBackground
    },
    hasSidebar: _defineProperty({
      paddingLeft: 200
    }, small, {
      paddingLeft: 0
    }),
    content: (_content = {
      maxWidth: 1000,
      padding: [ [ 15, 30 ] ],
      margin: [ [ 0, 'auto' ] ]
    }, _defineProperty(_content, small, {
      padding: 15
    }), _defineProperty(_content, 'display', 'block'), _content),
    sidebar: _defineProperty({
      backgroundColor: codeBackground,
      border: [ [ border, 'solid' ] ],
      borderWidth: [ [ 0, 1, 0, 0 ] ],
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      width: 200,
      overflow: 'auto'
    }, small, {
      position: 'static',
      width: 'auto',
      borderWidth: [ [ 1, 0, 0, 0 ] ],
      paddingBottom: 5
    }),
    logo: {
      padding: 15,
      borderBottom: [ [ 1, border, 'solid' ] ]
    },
    footer: {
      display: 'block',
      color: light,
      fontFamily: font,
      fontSize: 12
    }
  };
};

function StyleGuideRenderer(_ref2) {
  let classes = _ref2.classes,
    title = _ref2.title,
    homepageUrl = _ref2.homepageUrl,
    children = _ref2.children,
    toc = _ref2.toc,
    hasSidebar = _ref2.hasSidebar;

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(classes.root, hasSidebar && classes.hasSidebar) },
    _react2.default.createElement(
      'main',
      { className: _classnames(classes.content, style['main'], !hasSidebar ? style['fullwidth'] : '') },
      children,
      _react2.default.createElement(
        'footer',
        { className: classes.footer },
        _react2.default.createElement(_Markdown2.default, { text: `Generated with [React Styleguidist](${homepageUrl})` })
      )
    ),
    hasSidebar && _react2.default.createElement(
      'div',
      { className: _classnames(classes.sidebar, style['sidebar']) },
      _react2.default.createElement(
        'div',
        { className: classes.logo },
        _react2.default.createElement(
          _Logo2.default,
          null,
          <Icon icon='rclLogo' className={ style['RCL-Logo'] }/>
        )
      ),
      toc
    )
  );
}

StyleGuideRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  homepageUrl: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  toc: PropTypes.node.isRequired,
  hasSidebar: PropTypes.bool
};

exports.default = (0, _Styled2.default)(styles)(StyleGuideRenderer);

/* eslint-enable */
