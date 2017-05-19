'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.TableOfContentsRenderer = TableOfContentsRenderer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Styled = require('rsg-components/Styled');

var _Styled2 = _interopRequireDefault(_Styled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(_ref) {
	var font = _ref.font,
	    base = _ref.base,
	    border = _ref.border,
	    link = _ref.link,
	    baseBackground = _ref.baseBackground;
	return {
		root: {
			fontFamily: font
		},
		search: {
			padding: 15
		},
		input: {
			display: 'block',
			width: '100%',
			padding: [[6, 12]],
			color: base,
			backgroundColor: baseBackground,
			fontFamily: font,
			fontSize: 15,
			border: [[1, border, 'solid']],
			borderRadius: 2,
			transition: 'border-color ease-in-out .15s',
			'&:focus': {
				isolate: false,
				borderColor: link,
				outline: 0
			}
		}
	};
};

function TableOfContentsRenderer(_ref2) {
	var classes = _ref2.classes,
	    children = _ref2.children,
	    searchTerm = _ref2.searchTerm,
	    onSearchTermChange = _ref2.onSearchTermChange;

	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'div',
			{ className: classes.root },
			_react2.default.createElement(
				'div',
				{ className: classes.search },
				_react2.default.createElement('input', {
					value: searchTerm,
					className: classes.input,
					placeholder: 'Filter by name',
					onChange: function onChange(event) {
						return onSearchTermChange(event.target.value);
					}
				})
			),
			children
		)
	);
}

TableOfContentsRenderer.propTypes = {
	classes: _propTypes2.default.object.isRequired,
	children: _propTypes2.default.node,
	searchTerm: _propTypes2.default.string.isRequired,
	onSearchTermChange: _propTypes2.default.func.isRequired
};

exports.default = (0, _Styled2.default)(styles)(TableOfContentsRenderer);