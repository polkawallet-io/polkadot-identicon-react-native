"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactCopyToClipboard = _interopRequireDefault(require("react-copy-to-clipboard"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _keyring = require("@polkadot/keyring");

var _index = _interopRequireDefault(require("@polkadot/ui-settings/index"));

var _util = require("@polkadot/util");

var _Empty = _interopRequireDefault(require("./Empty"));

var _Polkadot = _interopRequireDefault(require("./Polkadot"));

var _Substrate = _interopRequireDefault(require("./Substrate"));

// Copyright 2017-2019 @polkadot/ui-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
const DEFAULT_SIZE = 64;
const Components = {
  'polkadot': _Polkadot.default,
  'substrate': _Substrate.default
};

const Wrapper = _styledComponents.default.View.withConfig({
  displayName: "src__Wrapper",
  componentId: "lybtcb-0"
})(["svg{position:relative;}&:before{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:50%;box-shadow:0 0 5px 2px #e0e0e0;content:'';}&.highlight:before{box-shadow:0 0 5px 2px red;}}"]);

class IdentityIcon extends _react.default.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      address: null
    };

    this.onCopy = () => {
      const onCopy = this.props.onCopy;
      const address = this.state.address;

      if (address && onCopy) {
        onCopy(address);
      }
    };
  }

  static setDefaultPrefix(prefix) {
    IdentityIcon.prefix = prefix;
  }

  static getDerivedStateFromProps(_ref, prevState) {
    let _ref$prefix = _ref.prefix,
        prefix = _ref$prefix === void 0 ? IdentityIcon.prefix : _ref$prefix,
        value = _ref.value;

    try {
      const address = (0, _util.isU8a)(value) || (0, _util.isHex)(value) ? (0, _keyring.encodeAddress)(value, prefix) : value;
      (0, _keyring.decodeAddress)(address, prefix);
      return address === prevState.address ? null : {
        address
      };
    } catch (error) {// swallow,invalid address or input
    }

    return {
      address: null
    };
  }

  render() {
    const address = this.state.address;
    const wrapped = this.getWrapped(address);
    return !address ? wrapped : _react.default.createElement(_reactCopyToClipboard.default, {
      onCopy: this.onCopy,
      text: address
    }, wrapped);
  }

  getWrapped(address) {
    const _this$props = this.props,
          className = _this$props.className,
          _this$props$isHighlig = _this$props.isHighlight,
          isHighlight = _this$props$isHighlig === void 0 ? false : _this$props$isHighlig,
          _this$props$size = _this$props.size,
          size = _this$props$size === void 0 ? DEFAULT_SIZE : _this$props$size,
          style = _this$props.style,
          _this$props$theme = _this$props.theme,
          theme = _this$props$theme === void 0 ? _index.default.uiTheme : _this$props$theme;
    const Component = !address ? _Empty.default : Components[theme] || _Substrate.default;
    return _react.default.createElement(Wrapper, {
      className: ['ui--IdentityIcon', className].join(' '),
      key: address || '',
      style: style
    }, _react.default.createElement(Component, {
      className: isHighlight ? 'highlight' : '',
      size: size,
      value: address || ''
    }));
  }

}

exports.default = IdentityIcon;
IdentityIcon.prefix = undefined;