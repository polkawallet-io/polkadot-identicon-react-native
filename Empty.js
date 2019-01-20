"use strict";
import { View } from 'react-native';
import {Svg, Circle} from 'react-native-svg';
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

// Copyright 2017-2019 @polkadot/ui-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
class Empty extends _react.default.PureComponent {
  render() {
    const _this$props = this.props,
          className = _this$props.className,
          size = _this$props.size,
          style = _this$props.style;
    return _react.default.createElement(View, {
      className: `container ${className}`,
      style: style
    }, _react.default.createElement(Svg, {
      height: size,
      viewBox: "0 0 64 64",
      width: size
    }));
  }

}

exports.default = Empty;