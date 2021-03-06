'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  containerStyle: {
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.6)',
    position: 'fixed',
    top: '0px',
    left: '0px',
    zIndex: 10000
  },
  contentBlock: {
    zIndex: '10000',
    width: '50%',
    height: '50%',
    background: 'white',
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  }
};

var Modal = function Modal(props) {
  return _react2.default.createElement(
    'div',
    { onClick: function onClick() {
        return props.modalOutsideClick && props.modalOutsideClick();
      }, style: _extends({}, styles.containerStyle, props.modalOutsideStyle) },
    _react2.default.createElement(
      'div',
      { onClick: function onClick(e) {
          return e.stopPropagation();
        }, style: _extends({}, styles.contentBlock, props.modalInsideStyle) },
      props.children
    )
  );
};

exports.default = Modal;