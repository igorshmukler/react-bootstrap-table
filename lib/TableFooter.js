'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Const = require('./Const');

var _Const2 = _interopRequireDefault(_Const);

var _SelectRowHeaderColumn = require('./SelectRowHeaderColumn');

var _SelectRowHeaderColumn2 = _interopRequireDefault(_SelectRowHeaderColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableFooter = function (_Component) {
  _inherits(TableFooter, _Component);

  function TableFooter() {
    _classCallCheck(this, TableFooter);

    return _possibleConstructorReturn(this, (TableFooter.__proto__ || Object.getPrototypeOf(TableFooter)).apply(this, arguments));
  }

  _createClass(TableFooter, [{
    key: 'render',
    value: function render() {
      var containerClasses = (0, _classnames2.default)('react-bs-container-header', 'table-header-wrapper');
      var tableClasses = (0, _classnames2.default)('table', 'table-hover', {
        'table-bordered': this.props.bordered,
        'table-condensed': this.props.condensed
      }, this.props.tableFooterClass);
      var selectRowHeaderCol = null;
      if (!this.props.hideSelectColumn) selectRowHeaderCol = this.renderSelectRowHeader();
      var i = 0;
      return _react2.default.createElement(
        'div',
        { ref: 'container', className: containerClasses, style: this.props.style },
        _react2.default.createElement(
          'table',
          { className: tableClasses },
          _react2.default.cloneElement(this.props.colGroups, { ref: 'headerGrp' }),
          _react2.default.createElement(
            'tfoot',
            null,
            _react2.default.createElement(
              'tr',
              { ref: 'footer' },
              selectRowHeaderCol,
              _react2.default.Children.map(this.props.children, function (child) {
                return _react2.default.createElement(
                  'td',
                  { key: 'tf_' + i++ },
                  child.props.footerText || child.props.children
                );
              })
            )
          )
        )
      );
    }
  }, {
    key: 'renderSelectRowHeader',
    value: function renderSelectRowHeader() {
      if (this.props.rowSelectType === _Const2.default.ROW_SELECT_SINGLE) {
        return _react2.default.createElement(_SelectRowHeaderColumn2.default, null);
      } else {
        return null;
      }
    }
  }]);

  return TableFooter;
}(_react.Component);

TableFooter.propTypes = {
  tableHeaderClass: _react.PropTypes.string,
  style: _react.PropTypes.object,
  colGroups: _react.PropTypes.element,
  hideSelectColumn: _react.PropTypes.bool,
  bordered: _react.PropTypes.bool,
  condensed: _react.PropTypes.bool,
  isFiltered: _react.PropTypes.bool,
  sortIndicator: _react.PropTypes.bool
};

var _default = TableFooter;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TableFooter, 'TableFooter', '/Users/shmukler/Projects/react-bootstrap-table/src/TableFooter.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/shmukler/Projects/react-bootstrap-table/src/TableFooter.js');
}();

;